task :publish do
  `rm -rf ./docs`
  `mkdir ./docs`
  `curl http://localhost:3000 > ./docs/index.html`
  `cp -r ./public/* ./docs/`
end
