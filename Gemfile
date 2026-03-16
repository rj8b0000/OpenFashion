source 'https://rubygems.org'

ruby ">= 2.6.10"

# Exclude problematic versions of cocoapods and activesupport
gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1', '~> 1.16.0'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'

# xcodeproj pin removed earlier (good)
# gem 'xcodeproj', '< 1.26.0'   # ← keep commented out or deleted

# Fixes for Ruby 3.4+ standard library removals
gem 'bigdecimal'
gem 'logger'
gem 'benchmark'
gem 'mutex_m'
gem 'concurrent-ruby', '< 1.3.4'
gem 'nkf'          # ← ADD THIS (fixes kconv error)
gem 'base64'       # ← ADD THIS (recommended, prevents similar issues)
