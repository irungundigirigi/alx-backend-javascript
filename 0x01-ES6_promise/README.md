Tasks
0. Keep every promise you make and only make promises you can keep
mandatory

Return a Promise using this prototype function getResponseFromAPI()

``` 

bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ ```
