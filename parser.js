
try {
  let aiText = $json.response.text;
  
  aiText = aiText.replace(/```json|```/g, '').trim();
  
  const firstBracket = aiText.indexOf('{');
  const lastBracket = aiText.lastIndexOf('}');
  
  if (firstBracket !== -1 && lastBracket !== -1) {
    aiText = aiText.substring(firstBracket, lastBracket + 1);
  }

  const parsedAI = JSON.parse(aiText);

  return {
    title: $json.title,
    link: $json.link,
    description: $json.description,
    score: Number(parsedAI.score || 0),
    reason: parsedAI.reason || "No reason provided."
  };
} catch (error) {
  return {
    title: $json.title,
    link: $json.link,
    description: $json.description,
    score: 1,
    reason: "Failed parsing response format cleanly."
  };
}
