from transformers import AutoTokenizer, AutoModelForSequenceClassification
from transformers import pipeline

MAX_TOKENS = 510


def finbertSentiment(text):
    model_name = "ProsusAI/finbert"
    tokenizer = AutoTokenizer.from_pretrained(model_name, clean_up_tokenization_spaces=True)
    model = AutoModelForSequenceClassification.from_pretrained(model_name)
    # 0 for the first GPU, -1 for the CPU
    device = 0
    nlp = pipeline("sentiment-analysis",
                   model=model,
                   tokenizer=tokenizer,
                   device=device
                   )

    sentiment = nlp(text[:MAX_TOKENS])
    return sentiment
