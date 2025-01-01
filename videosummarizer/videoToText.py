import moviepy.editor as mp
import whisper

def video_to_audio(video_file_path, audio_file_path):
    print("video to audio conversion")
    # Load video file
    video = mp.VideoFileClip(video_file_path)
    # Extract and save the audio
    video.audio.write_audiofile(audio_file_path)

def audio_to_text(audio_file_path):
    print("audio to text conversion")
    # Load Whisper model
    model = whisper.load_model("base")
    # Transcribe audio to text
    result = model.transcribe(audio_file_path)
    return result['text']

def video_to_text(video_file_path):
    print("video to text conversion")
    audio_file_path = "extracted_audio.wav"
    video_to_audio(video_file_path, audio_file_path)
    text = audio_to_text(audio_file_path)
    return text

# Example usage
video_file = "test_video.mp4"  # Replace with your video file path
transcribed_text = video_to_text(video_file)
print(transcribed_text)
