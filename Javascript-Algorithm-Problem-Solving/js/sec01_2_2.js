function solution(a,b,c){
    let answer="YES", max;//max인 이유 알아보기
    let sum = a+b+c;

    if(a>b) max=a;
    else max=b;

    if(c>max) max=c;

    if(sum-max<=max) answer="NO";

    return answer;
}
console.log(solution(6,7,11));