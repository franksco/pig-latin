/// User Interface Logic ///
$(document).ready(function() {
  $("form.pig-latin").submit(function(event) {
    var word = ($("input#word").val());
    var new_word = wordPigLatin(word);
    var sentence = ($("input#sentence").val());
    var new_sentence = sentencePigLatin(sentence);
    $(".new_word").text(new_word);
    $(".new_sentence").text(new_sentence);
    $("#result").show();
    event.preventDefault();

  });
});

///Business Logic ///
function sentencePigLatin(sentence) {
  var silly_sentence = [];

  var new_sentence = sentence.split(" ");
  new_sentence.forEach(function(item) {
    var silly_word = wordPigLatin(item);
    silly_sentence.push(silly_word);
  });
    return silly_sentence.join(' ');
};

function wordPigLatin(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  console.log("test");

  var first_letter = word.charAt(0);
  var second_letter = word.charAt(1);

  if (first_letter === vowels[0] || first_letter === vowels[1] || first_letter === vowels[2] || first_letter === vowels[3] || first_letter === vowels[4]) {
    var word = word.concat("way");
    return word;

  } else if (vowels.indexOf(first_letter) === -1 && vowels.indexOf(second_letter) === -1) {
    var two_letters = word.slice(0, 2);
    var new_word = word.substr(2).concat(two_letters).concat("ay");
    return new_word;

  } else if (vowels.indexOf(first_letter) === -1) {
    var letter = word.slice(0, 1);
    var new_word = word.substr(1).concat(letter).concat("ay");
    return new_word;
  }
};
