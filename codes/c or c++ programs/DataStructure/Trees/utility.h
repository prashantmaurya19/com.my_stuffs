template<class T>
struct node{
        T data;
        node *left,*right;
        node(T data){
            this->data = data;
            left = right = NULL;
        };
        node(){};
};