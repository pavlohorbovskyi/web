var modalOptions = {
  openTrigger: 'data-custom-open',
  closeTrigger: 'data-micromodal-close',
  openClass: 'is-open',
  disableScroll: true,
  disableFocus: false,
  awaitOpenAnimation: false,
  awaitCloseAnimation: false,
  debugMode: false
};

MicroModal.init(modalOptions);


var button = document.getElementById('btn');
button.addEventListener('click', function(){
  MicroModal.show('modal-1', modalOptions);
});

var element = document.getElementById('phone');
var maskOptions = {
    mask: '+{38}(000)000-00-00',
    lazy: false
} 
var mask = new IMask(element, maskOptions);

var element2 = document.getElementById('email');
var maskOptions2 = {    
    mask:function (value) {
                if(/^[a-z0-9_\.-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
                    return true;
                return false;
                    },
    lazy: false
} 
var mask2 = new IMask(element2, maskOptions2);


document.getElementById('submit').addEventListener('click', () => {
	location.reload()
})
