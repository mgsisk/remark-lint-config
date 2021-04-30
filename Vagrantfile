Vagrant.configure('2') do |config|
  ENV['ZONE'] ||= 'America/Detroit'

  bash_aliases = File.join(Dir.home, '.bash_aliases')
  bash_profile = File.join(Dir.home, '.bash_profile')
  gitconfig = File.join(Dir.home, '.gitconfig')
  gitignore = File.join(Dir.home, '.gitignore')
  npmrc = File.join(Dir.home, '.npmrc')
  vimrc = File.join(Dir.home, '.vimrc')

  config.vm.box = 'debian/contrib-buster64'
  config.vm.hostname = File.basename(Dir.pwd) + '.test'
  config.vm.network 'private_network', type: 'dhcp'
  config.vm.provision 'file', source: bash_aliases, destination: '~/.bash_aliases' if File.file?(bash_aliases)
  config.vm.provision 'file', source: bash_profile, destination: '~/.bash_profile' if File.file?(bash_profile)
  config.vm.provision 'file', source: gitconfig, destination: '~/.gitconfig' if File.file?(gitconfig)
  config.vm.provision 'file', source: gitignore, destination: '~/.gitignore' if File.file?(gitignore)
  config.vm.provision 'file', source: npmrc, destination: '~/.npmrc' if File.file?(npmrc)
  config.vm.provision 'file', source: vimrc, destination: '~/.vimrc' if File.file?(vimrc)
  config.vm.provision 'shell', path: 'https://github.com/mgsisk/providence/releases/download/v0.1.0/provisioner.sh', env: {
    'ZONE' => ENV['ZONE'],
  }
end
