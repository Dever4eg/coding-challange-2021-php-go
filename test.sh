for file in $(find . -name '*.test.js')
do
  echo "Running test: $file"
  node "$file"
done
