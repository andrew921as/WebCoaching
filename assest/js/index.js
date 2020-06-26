$(document).ready(function () {
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop > 30){
            $(".main-nav").addClass("navbar-color");
        } else {
            $(".main-nav").removeClass("navbar-color");
        }
    })
});
var images= [1,2,3,4,5,6,7,8,9];
const galer=document.getElementById('galeria');

for(ima of images){
    galer.innerHTML += `
    <div class="card">
    <a href="#" data-toggle="modal" data-target="#class${ima}"> <img src="assest/images/galery/${ima}.jpg"
            class="card-img-top" alt=""></a>
</div>
<!-- Modal -->
<div class="modal fade" id="class${ima}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span
            aria-hidden="true">&times;</span>
    </button>
    <div class="modal-dialog" role="document">
        <img src="assest/images/galery/${ima}.jpg" alt="" class="img-fluid rounded">
    </div>
</div>
<!-- End Modal -->
    `
};
