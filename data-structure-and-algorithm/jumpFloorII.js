/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * @param number
 * @returns {number}
 * f(1)=1,f(2)=2,f(3)=4,f(4)=8,f(n)=2^n-1
 */
function jumpFloorII(number)
{
    if(number==0){
        return 1;
    }
    else {
        return Math.pow(2, number-1);
    }
}
