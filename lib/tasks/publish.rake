task :publish do
  `RAILS_ENV=production rails assets:precompile`
  `rm -rf ./docs/index.html ./docs/packs ./docs/semantic`
  `curl http://localhost:3000 > ./docs/index.html`
  `cp -r ./public/* ./docs/`
end
