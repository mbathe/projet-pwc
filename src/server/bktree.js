function triple_min(a, b, c) {
    const temp = a < b ? a : b;
    return temp < c ? temp : c;
  }
  

  function edit_distance(a, b) {
    
    const m = a.length;
    const n = b.length;
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1);
    }
  
  
    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }
  

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (a[i - 1] !== b[j - 1]) {
          dp[i][j] = triple_min(
            1 + dp[i - 1][j], 
            1 + dp[i][j - 1], // insertion
            1 + dp[i - 1][j - 1], // replacement
          );
        } else {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
    return dp[m][n];
  }
  
 
  
  function BKNode(w) {
    this.word = w;
    this.next = new Array(2 * LEN);
    for (let i = 0; i < 2 * LEN; i++) {
      this.next[i] = -1;
    }
  }
  
  BKNode.prototype.set_word = function set_word(w) {
    this.word = w;
  };
  
  
  export default class BKTree {
    constructor(word_num) {
      this.tree = new Array(word_num);
      for (let i = 0; i < this.tree.length; i++) {
        this.tree[i] = new BKNode("");
      }
      this.rt = new BKNode("");
      this.ptr = 0;
    }
    _add(idx, curr) {
      if (this.rt.word === "") {
        this.rt.set_word(curr.word);
        this.tree[0] = this.rt;
        return;
      }
      const dist = edit_distance(this.rt.word, curr.word);
      
      if (this.tree[idx].next[dist] === -1) {
        
        this.ptr++;
  
        this.tree[this.ptr].set_word(curr.word);
  
        
        this.tree[idx].next[dist] = this.ptr;
      } else {
        
        this._add(this.tree[idx].next[dist], curr);
      }
    }
    _sim_words(idx, word, TOL) {
      let ret = [];
      if (idx === -1) {
        return ret;
      }
  
      if (this.rt.word === "") {
        return ret;
      }
      const cur_rt = this.tree[idx];
  
      
      const dist = edit_distance(word, cur_rt.word);
      
      if (dist <= TOL) {
        ret.push(cur_rt.word);
      }
  
      let start = dist - TOL;
      if (start < 0) {
        start = 1;
      }
      const end = dist + TOL;
      while (start < end) {
        const temp = this._sim_words(cur_rt.next[start], word, TOL);
        ret = ret.concat(temp);
        start++;
      }
      return ret;
    }
    add(words) {
      if (!Array.isArray(words)) {
        throw new Error("words is not array");
      }
      words.forEach((element) => {
        this._add(0, new BKNode(element));
      });
    }
  
    simWords(src, TOL) {
      return this._sim_words(0, src, TOL);
    }
  }
  