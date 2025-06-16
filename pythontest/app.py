import cv2
import numpy as np
from keras.models import load_model

model=load_model("model.hdf5",compile=False)
emotion_target_size = model.input_shape[1:3]
emotion_offsets = (20, 40)
emotion_labels={0: 'angry', 1: 'disgust', 2: 'fear', 3: 'happy',
                4: 'sad', 5: 'surprise', 6: 'neutral'}
def put_text(text,pos):
    font = cv2.FONT_HERSHEY_SIMPLEX
    text = text  # The text to display
    position = pos  # Position of the text (x, y)
    font_scale = 1  # Font scale
    color = (0, 0, 0)  # Text color (BGR format)
    thickness = 2  # Thickness of the text
    line_type = cv2.LINE_AA  # Line type for smooth edges

    # Put the text on the image (frame)
    cv2.putText(frame, text, position, font, font_scale, color, thickness, line_type)
def preprocess_input(x, v2=True):
    x = x.astype('float32')
    x = x / 255.0
    if v2:
        x = x - 0.5
        x = x * 2.0
    return x
def apply_offsets(face_coordinates, offsets):
    x, y, width, height = face_coordinates
    x_off, y_off = offsets
    return (x - x_off, x + width + x_off, y - y_off, y + height + y_off)
# Open the default camera (usually webcam 0)
cap = cv2.VideoCapture(0)

# Check if the webcam is opened correctly
if not cap.isOpened():
    print("Error: Could not open webcam.")
    exit()

# Loop to capture frames continuously
while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    gray_img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    haar=cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    faces=haar.detectMultiScale(gray_img, 1.1, 9)
    # Check if the frame was captured successfully
    if not ret:
        print("Error: Could not read frame.")
        break
    for face_coordinates in faces: 
        x,y,w,h=face_coordinates
        x1,x2,y1,y2 = apply_offsets(face_coordinates, emotion_offsets)
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        gray_face = gray_img[y1:y2, x1:x2]
        # print(gray_img[w:h,x:y])
        try:
            gray_face = cv2.resize(gray_face, (emotion_target_size))
        except:
            continue
        gray_face = preprocess_input(gray_face, True)
        gray_face = np.expand_dims(gray_face, 0)
        gray_face = np.expand_dims(gray_face, -1)
        emotion_prediction = model.predict(gray_face)
        emotion_probability = np.max(emotion_prediction)
        emotion_label_arg = np.argmax(emotion_prediction)
        emotion_text = emotion_labels[emotion_label_arg]
        put_text(emotion_text,(x,y-50))
        print(emotion_text)
    # Display the captured frame
    cv2.imshow('Webcam Video', frame)

    # Break the loop when 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()
