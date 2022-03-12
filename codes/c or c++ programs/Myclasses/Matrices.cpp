#include<bits/stdc++.h>
using namespace std;

template<class T>
class Matrix{
private:
  vector<vector<T>> matrix;
  void init(vector<vector<T>> matrix){
    this->matrix = matrix;
  }
public:

  Matrix(){

  }
  Matrix(int row , int col){
    init(vector<vector<T>> (row,vector<T> (col,0)));
  }

  Matrix(vector<vector<T>> matrix){
    init(matrix);
  }

  int addColumn(vector<T> col,int index = -1){

    if(this->matrix.size()!=col.size()){
      return 0;
    }
    if(index==-1){
      for (int i = 0; i < col.size(); i++) {
        this->matrix[i].push_back(col[i]);
      }
    }else{
      for (int i = 0; i < col.size(); i++) {
        this->matrix[i].insert(this->matrix[i].begin()+index,col[i]);
      }
    }
    return 1;

  }

  int getColumnLength(){
    return this->matrix[0].size();
  }

  int getRowLength(){
    return this->matrix.size();
  }

  int addRow(vector<T> row,int index = -1){
    if(this->matrix.size()==0){
      return 0;
    }else if(this->matrix[0].size()!=row.size()){
      return 0;
    }
    if(index==-1){
      this->matrix.push_back(row);
    }else{
      this->matrix.insert(this->matrix.begin()+index,row);
    }
    return 1;
  }

  int removeRow(int index=-1){
    if(this->matrix.size()==0){
      return 0;
    }
    if(index==-1){
      this->matrix.pop_back();
    }else{
      this->matrix.erase(this->matrix.begin()+index);
    }
    return 1;
  }

  int removeColumn(int index=-1){
    if(this->matrix.size()==0){
      return 0;
    }
    if(index==-1){
      for (auto &it : this->matrix) {
        it.pop_back();
      }
    }else{
      for (auto &it : this->matrix) {
        it.erase(it.begin()+index);
      }
    }
    return 1;
  }

  void replace(int row,int col,T data){
    this->matrix[row][col] = data;
  }

  Matrix<T> transpose(){
    Matrix<T> result(this->getColumnLength(),this->getRowLength());
    for(int i = 0; i<this->getRowLength();i++){
      for(int j = 0; j<this->getColumnLength();j++){
        result.replace(j,i,this->get(i,j));
      }
    }
    return result;
  }

  T get(int i,int j){
    return this->matrix[i][j];
  }

  vector<vector<T>> getMatrix(){
    return this->matrix;
  }

  friend ostream &operator<<(ostream &output, const Matrix &m){
    for(auto row : m.matrix){
      for(auto element : row){
        output<<element<<" ";
      }
      output<<endl;
    }
    output<<endl;
    return output;
  }

  int operator=(vector<vector<T>> matrix){
    init(matrix);
    return 0;
  }

  int operator=(Matrix m){
    this->matrix = m.getMatrix();
    return 0;
  }

  Matrix<T> add_sub_helper(Matrix<T> m,char op){
    if(m.getRowLength()!=this->getRowLength() ||
     m.getColumnLength()!=this->getColumnLength()){
       Matrix<T> m;
       return m;
    }
    Matrix<T> result(m.getRowLength(),m.getColumnLength());
    for(int i = 0; i<m.getRowLength();i++){
      for(int j = 0; j<m.getColumnLength();j++){
        try{
          result.replace(i,j,(op=='+') ? this->matrix[i][j]+m[i][j] : this->matrix[i][j]-m[i][j]);
        }catch(const char *msg){
          cout<<msg<<endl;
        }
      }
    }
    return result;
  }

  Matrix operator+(Matrix m){
    return this->add_sub_helper(m,'+');
  }

  Matrix operator-(Matrix m){
    return this->add_sub_helper(m,'-');
  }

  vector<T> operator[](int i){
    return this->matrix[i];
  }

  bool operator==(Matrix m){
    for(int i = 0; i<m.getRowLength();i++){
      for(int j = 0; j<m.getColumnLength();j++){
        if(this->matrix[i][j]!=m[i][j]){
          return false;
        }
      }
    }
    return true;
  }

  Matrix<T> operator*(Matrix<T> m){
    if(this->getColumnLength()!=m.getRowLength()){
      return Matrix<T> ();
    }
    Matrix<T> result(this->getRowLength(),m.getColumnLength());
    for(int i=0 ;i < this->getRowLength();i++){
      for(int j = 0 ; j<m.getColumnLength();j++){
        int res = 0;
        for(int k = 0;k<m.getRowLength();k++){
          res += this->matrix[i][k] * m[k][j];
        }
        result.replace(i,j,res);
      }
    }
    return result;
  }
};

int main(){
  Matrix<int> b,n,m,m1;
  m1 = {
        {0,7,8},
        {-5,0,10},
        {8,-6,0}
       };
  b={
    {2},
    {-2},
    {3}
  };
  m = {
        {1,-2,3},
        {-4,2,5}
      };
  n={
      {2,3},
      {4,5},
      {2,1}
    };
  cout<<n.transpose()<<m<<m1<<endl;
  cout<<(n*m)<<endl;
  cout<<(m1*b)<<endl;
  return 0;
 }
