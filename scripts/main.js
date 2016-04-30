$(document).ready(function(){
	
	// $('.holo-img').addClass('spinEffect');
	$(function(){	
		$('.holo-img').addClass(".spinEffect");
	});
	function readURL(input,pos) {
        if (input.files && input.files[0]) {
            console.log(input.files);
            console.log(input.files[0]);
            if ( input.files[0].type == 'image/jpeg'  || input.files[0].type == 'image/gif' || input.files[0].type == 'image/png'){
                console.log('format');
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.holo-img').attr('src', e.target.result);
            
                     // $('#img-bottom').attr('src', e.target.result);
                      // $('#img-left').attr('src', e.target.result);
                       // $('#img-right').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
                $('.upload-section').hide();
                $('.preview-section').show();
            }
            else{
                   alert('file format not supported');
                   return;
                }
        }
    }
    $('.preview-section').hide();
    $("#inputFile_top").change(function () {
        readURL(this,'top');
    });
     $("#inputFile_left").change(function () {
        readURL(this);
    });
       $("#inputFile_bottom").change(function () {
        readURL(this);
    });
         $("#inputFile_right").change(function () {
        readURL(this);
    });


 

});
