import brainfuck from "brainfuck"

const asyncBf = (src) => {
  return new Promise((resolve, reject) => {
    brainfuck.exec(src, (err, output) => {
      if (err) reject(err)
      resolve(output)
    })
  })
}

const src = `
>++++++++++
[>+++++>+++++>+++++>+++++>++++++>+++++>+++++>+++++>+++++>+++++><<<<<<<<<<<-]
>->++>---->-->---->---->>-->>->
<<<<<<<<<<<
>.>.>.>.>.>.>.>.>.>.
`

const solve = () =>  asyncBf(src)

export default solve
