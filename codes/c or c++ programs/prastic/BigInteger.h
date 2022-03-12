#include<sstream>
#include<iostream>
#include<string>
#include<stdlib.h>
#include<algorithm>
#include<iostream>
using namespace std;

class BigInteger{
private:
	int arr[500];
	int num_length = 1;
	bool negetive = false;
	string toString(){
		string converted = "";
		for(int i = 0;i<num_length;i++){
			switch (get(i)) {
				case 1: converted+="1";
				break;
				case 2 : converted+="2";
				break;
				case 3 : converted+="3";
				break;
				case 4 : converted+="4";
				break;
				case 5 : converted+="5" ;
				break;
				case 6 : converted+="6" ;
				break;
				case 7 : converted+="7" ;
				break;
				case 8 : converted+="8" ;
				break;
				case 9 : converted+="9" ;
				break;
				case 0 : converted+="0" ;
				break;
			}
		}
		return converted;
	}
	void init(string integer){
		for(int i = 499,j=integer.length()-1;j>=0;j--,i--){
			switch (integer[j]) {
				case '1' : arr[i] = 1;
				break;
				case '2' : arr[i] = 2;
				break;
				case '3' : arr[i] = 3;
				break;
				case '4' : arr[i] = 4;
				break;
				case '5' : arr[i] = 5 ;
				break;
				case '6' : arr[i] = 6 ;
				break;
				case '7' : arr[i] = 7 ;
				break;
				case '8' : arr[i] = 8 ;
				break;
				case '9' : arr[i] = 9 ;
				break;
				case '0' : arr[i] = 0 ;
				break;
				case '-' : negetive = true ;
				break;
				case ',' : i++ ;
				break;
			}
		}
		num_length = integer.length();
	}
public:
	BigInteger(){
		arr[499] = 0;
	};

	BigInteger(string integer){
		init(integer);
	}


	int get_digit(int x){
		return arr[x];
	}

	bool isNegetive(){
		return negetive;
	}

	void add(BigInteger integer){

		int i = 0;
		int j = 0;
		int carry = 0;
		while(true){
			if(j==integer.length()){
					if(i==num_length && carry!=0){
						num_length++;
						arr[500-num_length] = carry;
						break;
					}
					while(i<num_length){
						int add = carry + arr[499-i];
						arr[499-i] = add%10;
						carry = add/10;
						i++;
					}
					if(carry!=0){
							num_length++;
							arr[500-num_length] = carry;
						}
				break;
			}
			if(i==num_length){
					while(j<integer.length()){
							int add = carry + integer.get_digit(499-j);
							arr[499-j] = add%10;
							carry = add/10;
							j++;
						}
						num_length = integer.length();
						if(carry!=0){
							num_length++;
							arr[500-num_length] = carry;
						}
				break;
			}
			int add = arr[499-i] + carry + integer.get_digit(499-i);
			arr[499-i] = add%10;
			carry = add/10;
			i++;
			j++;
		}

	}

	void multiply(BigInteger integer){
			int carry = 0;
			map<int,vector<int>> dp;
			vector<int> total(num_length,0);
			int zeros = 1;
			for(int i = 499;i>=500-integer.length();i--){
						vector<int> m;
						int number = integer.get_digit(i);
						if(dp[number].empty()){
								int carry = 0;
								for(int j = 499;j>=500-num_length;j--){
									int product = carry + (arr[j] * number);
									carry = product/10;
									product %=10;
									m.insert(m.begin(),product);
								}
								if(carry!=0){
											m.insert(m.begin(),carry);
								}
								dp[number] = m;
							}else{
								m = dp[number];
							}
						int vec_m = m.size()-1;
						int vec_total = total.size()-zeros;
						int carry = 0;
						while(true){
							//handling if m(vec) run out first
							if(vec_m==-1){
									if(vec_total==-1 && carry!=0){
										total.insert(total.begin(),carry);
										break;
									}
									while(vec_total!=-1){
										int add = carry + total[vec_total];
										total[vec_total] = add%10;
										carry = add/10;
										vec_total--;
										}
										if(carry!=0){
												total.insert(total.begin(),carry);
											}
								break;
							}
							//handling if total run out first
							if(vec_total==-1){
									while(vec_m!=-1){
										int add = carry + m[vec_m];
										total.insert(total.begin(),add%10);
										carry = add/10;
										vec_m--;
									}
									if(carry!=0){
										total.insert(total.begin(),carry);
									}
								break;
							}
							int add = total[vec_total] + carry + m[vec_m];
							total[vec_total] = add%10;
							carry = add/10;
							vec_m--;
							vec_total--;
						}
						zeros++;
					}
					int num = total.size()-1;
					while(true){
						arr[499-((total.size()-1)-num)] = total[num];
						if(num==0){
							break;
						}
						num--;
					}
					num_length = total.size();
		}

	void print(){
		if(negetive){
			cout<<'-';
		}
		for(int i = 0;i<num_length;i++){
			cout<<arr[(500-num_length)+i];
		}
		cout<<endl;
	}


	int get(int index){
		return arr[(500-num_length)+index];
	}


	int length(){
		return num_length;
	}

	bool equal(BigInteger integer){
		if(num_length!=integer.length()){
			return false;
		}
		for(int i = 0;i<num_length;i++){
			if(arr[(500-num_length)+i]!=integer.get(i)){
				return false;
			}
		}
		return true;
	}

	bool greater(BigInteger integer){
		if(num_length<integer.length()){
			return true;
		}else if(num_length<integer.length()){
			return false;
		}
		for(int i = 0;i<num_length;i++){
			if(get(i)<integer.get(i)){
				return true;
			}else if(get(i)>integer.get(i)){
				return false;
			}
		}
		return false;
	}

	bool operator<(BigInteger integer){
		return this->greater(integer);
	}
	bool operator>(BigInteger integer){
		return (this->greater(integer)) ? false : true;
	}

	BigInteger operator+(const BigInteger integer){
		BigInteger big(this->toString());
		big.add(integer);
		return big;
	}

	void operator=(string integer){
		string s = integer;
		this->init(s);
	}

	BigInteger operator*(const BigInteger integer){
		BigInteger big(this->toString());
		big.multiply(integer);
		return big;
	}

	bool operator==(const BigInteger integer){
		return this->equal(integer);
	}
};
