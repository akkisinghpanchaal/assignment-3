var kaka = []; var ind = 0; 
var user_input = ''; 
var points = 0; 
var array =
['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ'
,'ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र'
,'ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ']; 
var d =['अमरीकन','अलमारी','अलमारी','आदमी','आप','आशा','और','एक','कमरा','कुरसी','ख़ाली','खिड़की','गाड़ी','गुजराती','चाचा','छोटा','जनवरी','चिड़िया' ,'छोटा','जनवरी','ज़रूर','जर्मन','जापानी','जी',
'नहीं','हाँ','ठीक','तीन','तु म','तू','दादी','दूसरा','दो','दोनों','नमस्ते','नहीं','पंखा','पंजाबी','पत्थर','पलंग','पाकिस्तानी','पिता','पुराना','प्रति','बग़ीचा','बच्चा','बड़ा','बहुत','बहू','बूढ़ा','भारतीय','भाषा','मकान','माता','मानव','मारुति','मूर्ति','मेज़','मैं','यह','यहाँ','ये','रविवार','राजा','रूसी','लड़का','लड़की','लाल','लोग','वह','वे','शुक्रिया ','सफ़ेद','साइकिल'];

function setValues(){
	user_input = '';
	document.getElementById('result').innerHTML = '';
	points = 0;
	var t = 11;
	for (t;t<=55;t++){

	var get = document.getElementById(t);
	var rand = array[Math.floor(Math.random() * array.length)];
	get.innerHTML = rand;
	get.value = rand;
	console.log(get.value);

	if (t%5 == 0)
		t = t+5;
	}
	var hehe = document.getElementById('output');
	hehe.innerHTML = '';

}
setValues();

function joinElements(){

	var word = '';
	for (i = 0; i<kaka.length ; i++){
		word += kaka[i];
	}
	return word;
}

function CheckAnswer(){

		if (d.indexOf(user_input) > -1){
				points += 5;
				document.getElementById('result').innerHTML = 'You collected ' + points + ' points.';
	}

		else{
			document.getElementById('result').innerHTML = 'Word not found';
		}
}

function f1(objButton){

	//alert(objButton.value);
	var tar = document.getElementById('output');
	console.log('tar ki value hai' + tar);
	tar.innerHTML += objButton.value;
	kaka[ind++] = objButton.value;
	user_input = joinElements();
	console.log(user_input);
}

