const fs = require('fs')
const spawn = require('child_process').spawn

// const ls = spawn('ls', ['-lh', process.argv[2]])
//
// ls.stdout.on('data', (data)=>{
//   console.log(`輸出: ${data}`)
// })
// ls.stderr.on('data',(data)=>{
//   console.log(`錯誤: ${data}`)
// })
// ls.on('close',(code)=>{
//   console.log(`子進程退出碼: ${code}`);
// })

const vsearch = spawn('vsearch',
 ['--cluster_size','/Users/ac/Documents/TMRNAseq_v2/result/full_seq.fa',
 '--consout',`/Users/ac/Documents/TMRNAseq_v2/result/cluster/${process.argv[2]}`,
 '--msaout',`/Users/ac/Documents/TMRNAseq_v2/result/alignment/${process.argv[2]}`,
 '--otutabout',`/Users/ac/Documents/TMRNAseq_v2/result/otu_table/${process.argv[2]}`,
 '--uc',`/Users/ac/Documents/TMRNAseq_v2/result/uc/${process.argv[2]}`,
 '--id','0.5',
 '--clusterout_id',
 '--clusterout_sort'])

vsearch.stdout.on('data',(data)=>{
  console.log(`processing vsearch clustering ${data}`)
})
vsearch.stderr.on('datas',(datas)=>{
  console.log(`error: ${datas}`);
})
vsearch.on('close',(code)=>{
  console.log(`exit code: ${code} ${process.argv[2]}`);
})
