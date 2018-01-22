const fs = require('fs')
const fsPath = require('fs-path')
const rl = require('readline')
const request = require('request')
const cheerio = require('cheerio')

let  cluster_key = []
let content_in = ''
let  seq = ''

const url = 'http://www.genome.jp/dbget-bin/www_bget?-f+-n+n+'

fs.readFile('../result/uc/'+ process.argv[2], (err,content)=>{
  if(err){
    console.log('File error')
  }else{
    const data = content.toString().split('\n')
    for(let i=0;i<data.length;i++){
      let datas = data[i].split('\t')
      if(datas[0] == 'S'){
        cluster_key.push(datas[8])
      }
    }
    console.log(cluster_key);
    for(let a=0;a<cluster_key.length;a++){
      seq = seq + cluster_key[a] + '\n'
      for(let i=0;data.length;i++){
        let datas = data[a].split('\t')
        // cluster_key[a] = new Array()
        if(datas[9] == cluster_key[a]){
          seq = seq + datas[8] + '\t'
         }
       }
        // console.log(seq);

    }
  }
})//fs.readFile
