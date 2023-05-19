# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin "leaflet", to: "https://ga.jspm.io/npm:leaflet@1.9.2/dist/leaflet-src.js", preload: true
pin "leaflet-css", to: "https://ga.jspm.io/npm:leaflet-css@0.1.0/dist/leaflet.css.min.js"
pin_all_from "app/javascript/controllers", under: "controllers"
