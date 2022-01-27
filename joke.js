fetch("https://icanhazdadjoke.com/slack").then(res => res.json()).then(data => {
	const joke = data.attachments[0].text;
	console.log(joke)
	const jokeElement=document.getElementById('jokeElement')
	
	jokeElement.innerHTML=joke;//passing joke to jokeElement
})