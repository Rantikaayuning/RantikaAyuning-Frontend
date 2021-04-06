const secret_text = "23dn3ir30fd2eddd";

const maskingText = (text) => {
    return text.split('').map((a, b) => a && b < text.split('').length - 3 ? '*' : a).join('');
}

maskingText(secret_text);