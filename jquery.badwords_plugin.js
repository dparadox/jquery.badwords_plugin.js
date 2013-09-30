/*
The MIT License (MIT)

Copyright (c) 2013 estebanlopezlumenup

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@Author estebanlopezlumenup

 */

(function($){
    $.fn.extend({
        badwords:function(msg, arr){
            return this.each(function(){
               var words_arr;

                if (typeof arr === 'undefined'){
                words_arr =new Array(
                    'caca',
                    'mierd',
                    'mamad',
                    'pija', 
                    'granput',
                    'vergu',
                    'sampaguavas',
                    'ssampaguavas',
                    'shit',
                    'ass', 
                    'puta', 
                    'puto',
                    'perra', 
                    'zorra', 
                    'picha',
                    'pichona',
                    'culo',
                    'felch',
                    'ano',
                    'verga', 
                    'moco',
                    'mocos',
                    'tierrosa', 
                    'tierroso',
                    'culear',
                    'mamar',
                    'chupar', 
                    'chupemela',
                    'sesentaynueve',
                    'sesenta y nueve',
                    'en cuatro',
                    'en 4',
                    'adefesio',
                    'balurde',
                    'boludo',
                    'boluda',
                    'cabr',
                    'cabron',
                    'cachimba',
                    'caga',
                    'cerot',
                    'ching',
                    'chucha',
                    'cojido',
                    'cojones',
                    'comemier',
                    'conch',
                    'conchud',
                    'coñ',
                    'cornud',
                    'organos genitales',
                    'malpari',
                    'cule',
                    'culer',
                    'gilipoll',
                    'hijo de',
                    'hijode',
                    'playo',
                    'guila',
                    'picha',
                    'care',
                    'jueputa',
                    'jilipollas',
                    'joder',
                    'malet',
                    'mamapi',
                    'mamon',
                    'mamón',
                    'maric',
                    'marricon',
                    'orto',
                    'pajer',
                    'panoch',
                    'papallon',
                    'papayona',
                    'pelotud',
                    'pendej',
                    'pija',
                    'pinche',
                    'pinga',
                    'pingo',
                    'soplanuc',
                    'tarad',
                    'semen',
                    'polvaz',
                    'polvas',
                    'vejiga',
                    'verg',
                    'paja',
                    'paji',
                    'zorr',
                    'sorra',
                    'skullfuck', 
                    'cunt', 
                    'cum dumpster', 
                    'glass bottom boat', 
                    'rusty trombone', 
                    'blumpkin', 
                    'cuntbag', 
                    'fuck hole', 
                    'cleveland Steamer', 
                    'shit fucker', 
                    'hairy axe wound', 
                    'meat flap', 
                    'stripper boots', 
                    'nut butter', 
                    'sausage queen', 
                    'cum freak', 
                    'suck a fat baby\'s dick', 
                    'blue waffle', 
                    'cumdump', 
                    'tit wank', 
                    'assmucus', 
                    'fuck yo mama', 
                    'make brown bubbles', 
                    'come down', 
                    'whack-a-mole', 
                    'clitty litter', 
                    'fist fuck', 
                    'fucktoy', 
                    'mother fucker', 
                    'beef curtain', 
                    'milf',
                    'gmilf',
                    'eat a dick', 
                    'fuck', 
                    'fuck puppet', 
                    'fuck (one\'s self)', 
                    'cut rope', 
                    'mafugly', 
                    'roast beef curtains', 
                    'blow mud', 
                    '50 yard cunt punt', 
                    'motherfucker', 
                    'need the dick', 
                    'kwif', 
                    'cum chugger', 
                    'corp whore', 
                    'snowball', 
                    'schlong juice', 
                    'bang (one\'s) box', 
                    'cuntsicle', 
                    'fuck-ass', 
                    'mother fucking', 
                    'get brain', 
                    'slut bucket', 
                    'chod', 
                    'ass hole', 
                    'bust down', 
                    'do (one\'s) business', 
                    'dick hole', 
                    'slip through the backdoor', 
                    'baby arm', 
                    'ass fuck', 
                    'cunt-struck', 
                    'meat drapes', 
                    'squeeze a steamer', 
                    'gangbang', 
                    'pussy fart', 
                    'cop some wood', 
                    'facial', 
                    'dick shy', 
                    'butt fuck', 
                    '(one\'s) bitch', 
                    'bust a load', 
                    'pussy palace', 
                    'eat hair pie', 
                    'kike', 
                    'anal impaler', 
                    'chota bags', 
                    'sweet dick daddy with the candy balls', 
                    'fuck-bitch', 
                    'flog the log', 
                    'cocksucker', 
                    'fuckmeat', 
                    'this bitch', 
                    'pink sausage wallet', 
                    'fuck trophy', 
                    'get some squish', 
                    'cock snot', 
                    'slunt', 
                    'clit licker', 
                    'blow me', 
                    'anal leakage', 
                    'take it up the ass', 
                    'cunt hair', 
                    'cornhole', 
                    'queaf', 
                    'gang-bang', 
                    'cunt hole', 
                    'beat the kids', 
                    'choade');
                }else{
                    words_arr = arr;
                }
                if( Object.prototype.toString.call( msg ) === '[object Array]' ) {
                    words_arr = msg;
                }
                    var regex = new RegExp('\\b(' + words_arr.join('|') + ')\\b', 'i' );


                    $(this).keyup(function(e){
                        var text = $(this).val();
                        text = text.toLowerCase();
                        if(regex.test(text)) {
                           $(this).val('');
                           if (typeof msg !== 'undefined' ){
                             if(msg.length  > 0 && Object.prototype.toString.call( msg ) !== '[object Array]' ){
                               alert(msg); 
                             }
                           }
                            $(this).focus();
                            return false;
                        }
                    });
            });
        }
    });
    
})(jQuery);



