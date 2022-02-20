task :publish do
  `RAILS_ENV=production rails assets:clean assets:precompile`
  `rm -rf ./docs/index.html ./docs/packs ./docs/semantic`
  `curl http://localhost:3000 > ./docs/index.html`
  `cp -r ./public/* ./docs/`
  `rm -rf ./public/assets ./public/packs ./public/semantic`
end
