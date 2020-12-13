#include<iostream>
using namespace std;

class stringtoint{
public:
  bool check ( char c )
    {
        if ( c == '+'  or c == '-' or ( c >='0' and c <= '9' ) )
                return 1 ;


            return 0 ;
    }



    bool IsNum ( char c )
    {
        if ( ( c >='0' and c <= '9' ) )
                return 1 ;



        return 0 ;



    }
    int myAtoi(string s)
    {
        int i =0 ;
        while ( i < s.length()  and s [ i ] == ' ' )
                i ++ ;


        if (  i < s.length() and ! check ( s [ i ] ) )
                return 0 ;


        int flag = 1 ;
        if (i < s.length() and (  s [ i ] == '+' or s [ i ] == '-' )  )
        {
            if ( s [ i ] == '-' )
                flag = -1;
            i ++ ;
        }

        int n = 0 ;
        while ( i < s.length() and IsNum ( s [ i ] ) )
        {


            if ( n >  INT_MAX/ 10 or ( n == INT_MAX / 10 and int ( s [ i ] - '0' ) > INT_MAX % 10 ) )
            {
                if ( flag == -1 )
                        return INT_MIN ;
                return INT_MAX ;

            }
            n = n * 10 + int ( s [ i ] - '0' ) ;
            i++ ;
        }



        return flag * n ;

    }

    int prashantAtoi(string s) {
            int result = 0, check = 0;
    				bool checkAlpha= false;
            for(int i = 0;i<s.length();i++){
    					int num = result;
                if(result!=0 and !(result > INT_MAX/ 10)){
    							result *= 10;
    						}else if(s[i]==' '){
    							continue;
    						}else if(s[i]=='+'){
                    check++;
                    continue;
                }
    						switch(s[i]){
                        case '9': result += 9;
                            break;
                        case '8': result += 8;
                            break;
                        case '7': result += 7;
                            break;
                        case '6': result += 6;
                            break;
                        case '5': result += 5;
                            break;
                        case '4': result += 4;
                            break;
                        case '3': result += 3;
                            break;
                        case '2': result += 2;
                            break;
                        case '1': result += 1;
                            break;
                                 case '-': check++;
    												break;
    										default: checkAlpha = true;
    												break;
                }
    						if(checkAlpha){
    							result /= 10;
    							break;
    						}
                if(check>1){
                  return 0;
                }
            }
    				if(check!=0){
    					result *= -1;
    				}
            if(result > INT_MAX/ 10 || result < INT_MIN/ 10){
                if(check){
                    return INT_MIN;
                }
                return INT_MAX;
            }
            return result;
    }
};

int main(){


   return 0;
 }
