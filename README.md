# BackupFileCancelPublicContainer

# TODO

你需要在

[const status2 = useScript("http://192.168.0.101:62471/inject.js");](https://github.com/andythebreaker/material-kit-react/blob/main/src/App.js#L43)

賦予額外插入式js

```
window.onload = function() {
     console.log("window loaded")
document.getElementsByClassName('btn btn-primary btn-lg disabled')[0].onclick=(event)=>{event.preventDefault();Swal.fire({
  title: 'ﻪﻟ ﺕﺮﻳﺩ ﺍﻼﺴﺘﻣﺭﺍﺭ؟',
  icon: 'question',
  iconHtml: '؟',
  confirmButtonText: 'ﻦﻌﻣ',
  cancelButtonText: 'ﻻ',
  showCancelButton: true,
  showCloseButton: true
})}
};
```
