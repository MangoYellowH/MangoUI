# MangoUI
React based on Functional Component

- [MangoUI](#mangoui)
  - [install](#install)
    - [install homebrew into system](#install-homebrew-into-system)
    - [install iterm2](#install-iterm2)
    - [git](#git)
  - [REACT](#react)
    - [CONCEPT](#concept)
    - [KEYBOARD SHORTCUTS](#keyboard-shortcuts)
    - [Homebrew](#homebrew)
    - [init project](#init-project)
    - [yarn](#yarn)
  - [Other](#other)
    - [git moji](#git-moji)

## install

### install homebrew into system

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

```

### install iterm2

```shell
$ brew update                           # Fetch latest version of homebrew and formula.
$ brew tap caskroom/cask                # Tap the Caskroom/Cask repository from Github using HTTPS.
$ brew search iterm2                    # Searches all known Casks for a partial or exact match.
$ brew cask info iterm2                 # Displays information about the given Cask
$ brew cask install iterm2              # Install the given cask.
$ brew cleanup                          # Remove any older versions from the cellar.
```

### git
```shell
make sure git is installed.
git chekout master   # transfer to master branch
git add readme.md   #summit file to git
git commit
git push
git pull 
git rm file1.txt
git commit -m "remove file1.txt"  #remove the file from the git repository and the filesystem
```


## REACT
### CONCEPT
REACT IS A DECLARATIVE, EFFICIENT, AND FLEXIBLE JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES. 

### KEYBOARD SHORTCUTS
```shell
Command-H：隐藏最前面的 App 的窗口。
Command-M：将最前面的窗口最小化至“程序坞”。
Command-O：打开所选项，或打开一个对话框以选择要打开的文件。
Command-P：打印当前文稿。
Command-T：打开新标签页。
Command-W：关闭最前面的窗口。要关闭 App 的所有窗口，请按下 Option-Command-W。
Option-Command-Esc：强制退出 App。
Command–空格键：显示或隐藏“聚焦”搜索栏。
Control-Command–空格键：显示字符检视器，您可以从中选择表情符号和其他符号。
Control-Command-F：全屏使用 App（如果 App 支持）。
Command-逗号 (,)：打开最前面的 App 设置。
Shift-Command-5：在 macOS Mojave 或更高版本中，拍摄截屏或录制屏幕。
Control-Command-Q：立即锁定屏幕。
```

### Homebrew

update your brew to the very new version:

```shell
brew update && brew upgrade && brew cleanup
brew cask cleanup
```


some useful libs

```shell

brew install tig # the helper of git log
brew install pyenv # python version management 

```

### init project

```
npm init
```

### yarn

```
brew install yarn
```

```
brew upgrade yarn 
```



## Other

### git moji
<https://gitmoji.carloscuesta.me/>

<<<<<<< HEAD
=======
### configure eslint typescript

```
yarn add -D eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-import
```

read .eslint file




>>>>>>> 9151caa9c70cf9e5b2dea5c0d56039fbc8797da4
