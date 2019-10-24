class  BinaryHeap{
    constructor(){
      this.heap = [5,6,7,8,9,10,11,12,13,14,15]
    }
    
     insert(value){
  
      this.heap.push(value)
       this.bubbleUp();
    }
  
    //using iterative approach
       bubbleUp(){
         let index =  this.heap.length-1;
  
      while( index > 0){
         let element = this.heap[index],
             parentIndex = Math.floor((index-1)/2),
             parent = this.heap[parentIndex];
  
         if(parent <= element) break
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index = parentIndex
        console.log(this.heap)
  
      }
    }
    
    extractMax(){
      const max = this.heap[0];
      this.heap[0]= this.heap.pop()
      this.sinkDown(0)
      return max
    }
    
   sinkDown(index){
       
       let   left = 2*index+1,
             right = 2*index+2,
             largest = index;
       const length = this.heap.length
      
   
       
        if(left <= length &&  this.heap[left]<this.heap[largest] ){
           largest = left
         }
        if(right <= length && this.heap[right]<this.heap[largest]) {
          largest = right
        }
       // swap
       if(largest !== index){
          [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
         this.sinkDown(largest)
       }
       console.log(this.heap)
      } 
   
  }
  const heap = new BinaryHeap();
  heap.insert(1);
  heap.insert(2);