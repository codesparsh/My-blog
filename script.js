// $(() => {const time = 2000;//milliseconds
// let index = 0;
// const container = $(".container");
// const childrenCount = $(".item").length;
// function slideToNext() {

//     index = (index + 1) % childrenCount;
//     console.log(index);
//     container.css({
//         marginLeft: `${-1 * index * 100}%`
//     })
// }
// const pt = window.setInterval(() => {
//     slideToNext();
// },time);
// })
 $(document).on('click','.btn2',function(){
  const myTargetModal = `#${$(this).data('bid')}`;
  $('.myModal').hide();
  $('.modal-content').hide();
  
  $('.myModal').fadeIn();
  $(myTargetModal).fadeIn();
});

$("body" ).on( "click",".close", () => {
    $('.myModal').hide();
  $('.modal-content').hide();
});
