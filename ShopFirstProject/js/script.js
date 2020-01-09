


    $(function () {
        $("#slider_price").slider ({
            max: 1000,
            min : 0,
            range: true,
            values: [190, 728],
            slide: ( event, ui )=>{
                $('input[name="minPrice"]').val(  ui.values[0]);
                $('input[name="maxPrice"]').val(  ui.values[1]);

            }
        });
        $('input[name="minPrice"]').val(
            $('#slider_price').slider( 'values',0)
        );
        $('input[name="maxPrice"]').val(
            $('#slider_price').slider( 'values',1)
        );
        let titleBoxes = document.querySelectorAll('.title_box');
        titleBoxes.forEach( function (item) {
            item.onclick = titleBoxOnClick;
        });
        function titleBoxOnClick(elem) {
            let trg = elem.target;
            while (!trg.classList.contains('title_box')){
                trg = trg.parentElement;
            }
            if (trg.children[1].classList.contains('rotate')) {
                trg.children[1].classList.remove('rotate');
                trg.children[1].style.fill = '#ccc';
                trg.nextElementSibling.classList.toggle('hide');
            }
            else {
                trg.children[1].classList.add('rotate');
                trg.children[1].style.fill = 'black';
                trg.nextElementSibling.classList.toggle('hide');
            }
        }
        $('#cart, .title_cart_box').click ( (e)=> {

                $('#cart_box').toggleClass('open');
            }
        );

    });

