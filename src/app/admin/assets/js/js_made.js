alert(" Angular is Very Bad boy ");

var text_truncate = function (str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

const myTimeout = setInterval(
  function itrat() {
    text_truncate = function (str, length, ending) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };
    for (let i = 1; i < 1001; i++) {
      var str = document.getElementById([i]).innerHTML;

      document.getElementById([i]).innerHTML = text_truncate(str, 60, "...");
    }
  },

  5000
);

 function get_id (div){
  var film_name = div.id;
  console.log(film_name)
  alert(div.id)}
const next = document.querySelector("next")
