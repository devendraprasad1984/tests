const BinarySeachLogic = () => {

    let isFound = false
    let found = {}

    function findElementPosUsingBinary(start, end, elementValue) {
        let startX = start
        let endX = end
        let mid = Math.floor((start + end) / 2)
        // if (end > start) found = {start, mid, end, found: false}
        let check = elementValue === arr[mid]
        if (check === true || end > start) {
            found = {start, mid, end, found: check}
            isFound = true
        } else if (elementValue > arr[mid]) {
            startX = mid + 1
        } else if (elementValue < arr[mid]) {
            endX = mid - 1
        }
        if (isFound === false) {
            findElementPosUsingBinary(startX, endX, elementValue)
        }
    }

    arr = [1, 2, 5, 6, 8, 9]
    let element = 5
    findElementPosUsingBinary(0, arr.length - 1, element)
// let isFound = found['foundAt'] !== -1
// let newArray = !isFound ? [...arr, element].sort((a, b) => a - b) : arr
    if (found['found'] === false) arr.splice(found['start'], 0, element)
    console.log(arr, found)

}

//generate all possible combinations of a string
let str = 'abc'
// let len=Math.pow(2*str.length)
let len = str.length
let res = []
res.push(str)
for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
        let substr = str.substr(i, j)
        if (substr.length !== 0)
            res.push(str.substr(i, j))
    }
}
console.log(res)

from
functools
import wrap

function args

,
req``

@wrap
function to

make
actual
BinarySeachLogic
if logic passes, we
will
call
main

function from

callee
if failes, we retrun
res
as
failed
or
status
...




@,,..

class UserModel

(Modal)
:

name = modal.varchar(100,)
fathername = modal.varchar(100,)
mothername = modal.varchar(100,)
email = modal.varchar(100,)

def
...
string
....


splitwise
application

people in app
they
can
create
a
group in the
app
they
can
add
certain
expenses
relevant
to
that
group
only
they
can
initiate
the
split
equally
among
member, app
should
suggest
but
as
soon
split
proces
starts, storage
the
calculation


user
table: id, name, email, pwd, mobile
....
id: 1
id: 2
groups
table: group
id
id: 1
groupMember
table: group
and
users
id: 1
id: 1
id: 2
expenses: id, group, user, active, date, timestamp,
....
expid:1
group: 1
user: 1
expamt: 100 - 50 / 50

expid:1
group: 1
user: 2
expamt: 50 - 25 / 25

add
2
members

let groups = [{id: 1, name: 'xyz group'}]
let users = [{id: 1, name: 'dp'}, {id: 2, name: 'sumit'}]
let groupMembers = [{id:1,grpid:1,userid:1 },{id:2,grpid:1,userid:2 }]
let expenses = [{id: 1, amount: 100, grpid: 1}, {id: 2, amount: 50, grpid: 1}]

//we working on the screen where user logged in already, so associate group info is present
//user: 1 logged in, groupid: 1
//sort group in ascending order
for(let m of groupMembers){
    const {id,grpid,userid}=m
    //display the id/name on ....
    const user=users.filter(u=>u.id===userid)
    //have user object for any display purpose
    const group=groupMembers.filter(u=>u.grpid===grpid)
    //have group object for any display purpose
    const memberCount=group.length

    const expObj=expenses.filter(g=>g.grpid===grpid)

    const sharesByUser=[]
    for(let exp of expObj){
        const {amount}=exp
        const share=Round(amount/memberCount,0)
        shareByUser.push({userid,amount, share})
    }
}

sharesByUser: [{1,150,75}, {2,150,75}]





