//对象代理 getter setter

{
    var proxy = { a: 1 };
    console.log("proxy:" + proxy.a);
}

//es3数据保护
{
    class Person {
        constructor() {
            var data = {
                name: "es3",
                sex: 'male',
                age: 17
            };
            this.get = function (key) {
                return data[key];
            };
            this.set = function (key, value) {
                if (key != 'sex') {
                    data[key] = value;
                }
            };
        }
    }

    var person = new Person();
    console.table({ name: person.get('name'), sex: person.get('sex'), age: person.get('age') });
    //modifi property of name
    person.set('name', 'es3-new');
    console.table({ name: person.get('name'), sex: person.get('sex'), age: person.get('age') });
    //modifi property of sex,sex   writable is false
    person.set('sex', 'female');
    console.table({ name: person.get('name'), sex: person.get('sex'), age: person.get('age') });

}

//es5
{
    var Person = { name: 'es5', age: 15 };
    Object.defineProperty(Person, 'sex', {
        writable: false,
        value: 'male'
    });

    console.table({
        name: Person.name,
        age: Person.age,
        sex: Person.sex
    });

    //modifi property of name
    Person.name = 'es5-new';
    console.table({
        name: Person.name,
        age: Person.age,
        sex: Person.sex
    });
    try {
        //modifi property of sex
        Person.sex = 'female';
        console.table({
            name: Person.name,
            age: Person.age,
            sex: Person.sex
        });
    }
    catch (e) {
        console.log(e);
    }
}

//es6
{
    let Person = {
        name: 'es6',
        sex: 'male',
        age: 18
    };

    let person = new Proxy(Person, {
        get(target, key) {
            return target[key];
        },
        set(target, key, value) {
            if (key !== 'sex') { target[key] = value; }
        }
    });
    console.table({
        name: person.name,
        age: person.age,
        sex: person.sex
    });


    try {
        person.name = 'es6-cname';
    }
    catch (e) {
        console.log(e);
    }        //读取 
    console.table({
        name: person.name,
        sex: person.sex,
        age: person.age,
    });
}


{
    console.log('es6');

    // ES6
    let Person = {
        name: 'es6',
        sex: 'male',
        age: 15
    };

    let person = new Proxy(Person, {
        get(target, key) {
            return target[key]
        },
        set(target, key, value) {
            if (key !== 'sex') {
                target[key] = value;
            }
        }
    });

    try {
        person.sex = 'female';
    } catch (e) {
        console.log(e);
    } finally {

    }
    console.table({
        name: person.name,
        sex: person.sex,
        age: person.age
    });

}