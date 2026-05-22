const MORSE_MAP = {
	A:'· –',B:'– · · ·',C:'– · – ·',D:'– · ·',E:'·',F:'· · – ·',
	G:'– – ·',H:'· · · ·',I:'· ·',J:'· – – –',K:'– · –',L:'· – · ·',
	M:'– –',N:'– ·',O:'– – –',P:'· – – ·',Q:'– – · –',R:'· – ·',
	S:'· · ·',T:'–',U:'· · –',V:'· · · –',W:'· – –',X:'– · · –',
	Y:'– · – –',Z:'– – · ·',
	'0':'– – – – –','1':'· – – – –','2':'· · – – –','3':'· · · – –',
	'4':'· · · · –','5':'· · · · ·','6':'– · · · ·','7':'– – · · ·',
	'8':'– – – · ·','9':'– – – – ·'
};

function doMorse(){
	const input = document.getElementById('minput');
	const output = document.getElementById('mout');
	if (!input || !output) return;

	const words = input.value.toUpperCase().split(' ');
	const translated = words
		.map(word => word
			.split('')
			.map(char => MORSE_MAP[char] || '')
			.filter(Boolean)
			.join('   ')
		)
		.join('   /   ');

	output.textContent = translated;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('minput');
  if (input) {
    input.addEventListener('input', doMorse);
  }
});
