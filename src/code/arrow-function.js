/* eslint-disable */

//es3/5  实现
{
    var array = [1, 2, 3, 4, 5];
    var sum = array.map(function (v) {
        return v += 1;
    });
    console.log(array, sum);
}

//es6
{
    let array = [1, 2, 3, 4, 5];
    let sum = array.map(v => v + 1);
    console.log(array,sum);    
}

//es3,5
{
    var factory= function()
    {
        this.a = 'a';
        this.b = 'b';
        this.c = {
            a: 'a+',
            b: function()
            {
                return this.a;                
            }
        }
    }

    console.log(new factory().c.b());
}

//es6
{
    var factory = function() {
      this.a = 'a';
      this.b = 'b';
      this.c = {
        a: 'a+',
        b: () => {
          return this.a
        }
      }
    }
    console.log(new factory().c.b());
  }