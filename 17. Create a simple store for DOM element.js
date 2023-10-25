class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
   constructor() {
     this.mp = {};
   }
   set(node, value) {
    this.mp[node]=value
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    if(this.mp[node])
     return this.mp[node]
 
     return -1;
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
     if(this.mp[node])
       return true;
     
     return false;
   }
 }
 