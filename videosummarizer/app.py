from langchain.prompts import PromptTemplate
from langchain_community.llms import CTransformers

def getResponse(input_text):
    llm=CTransformers(model="model\llama-7b.ggmlv3.q3_K_S.bin",model_type="llama",config={'max_new_tokens':256,'temperature':0.1})

    print("I am running")
    template=f"Give a detail info about {input_text}" 
    prompt=PromptTemplate(input_variables=["input_text"],template=template)

    response=llm(prompt.format(input_text=input_text))

    return response
print("Enter the text")
val=input()
print(getResponse(val))
