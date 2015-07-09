/*
判断两个数组是否相似
*/
function arraySimilar(arr1, arr2) {
	// 判断类型
    function typeToString(obj) {
    	return Object.prototype.toString.call(obj).toLowerCase();
    }
    if (!(typeToString(arr1) === '[object array]' && typeToString(arr2) === '[object array]') ) {
        return false;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    var similar = false;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0 ;j < arr2.length; j++) {
            if (typeToString(arr1[i]) === typeToString(arr2[j])) {
                arr2.splice(j, 1);
                //如果相似，则跳出当前j循环
                similar = true;
				break;
            } else {
            	similar = false;
            }
        }
        //如果不相似，则直接跳出i循环~
        if (!similar) {
        	break;
        }
    }
    return similar;
}
var a = [1,true,'2'],b = [1,2,'{}'];
arraySimilar(a,b);
