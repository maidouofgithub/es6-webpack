/* eslint-disable */
//es3/5 默认参数
{
    function fun(x, y, z) {
        if (z == undefined) {
            z = 99;
        }
        return x + y + z;
    }

    console.log(fun(1, 8));
}

//es6 默认参数
{
    function fun(x, y = 1, z = 99) {
        return x + y + z;
    }
    console.log(fun(8));

}

// ES3,ES5 可变参数
{
    function fun() {
        var args = Array.prototype.slice.call(arguments);
        var sum = 0;
        args.forEach(function (item) {
            sum += item * 1;
        });
        return sum;
    }
    console.log(fun(1, 2, 3, 4, 5));
}

//es6 可变参数
{

    function fun(...a) {
        var sum = 0;
        a.forEach(item => {
            sum += item * 1;
        });
        return sum;
    }
    console.log(fun(1, 3, 5, 7, 9));
}

//es6 利用扩展符合并数组
{
    var params = ['hello', true, 8];
    var array = [1, 2, ...params];
    console.log(array);

}