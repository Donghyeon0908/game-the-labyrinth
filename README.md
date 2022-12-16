# The-Labyrinth

미궁속 미로에서 존재하는 단 하나의 길로 탈출하는 게임입니다.<br>

<p align="center">

<img src="https://user-images.githubusercontent.com/101446818/203972850-9d75b876-4385-4c04-9982-bc4c1ab2004c.png"  width="600" height="400"/>
<p/>

## 목차

- [배포](#배포)
- [제작 동기](#제작-동기)
- [개발 기간](#개발-기간)
- [기술스택](#기술스택)
- [챌린지](#챌린지)
- [실행방법](#실행방법)
- [회고](#회고)

## 배포

https://the-labyrinth.online/

## 제작 동기

어린 시절 게임을 했을 당시 마우스로 해당 장소를 가리키면 유닛들이 이동을 하는데 장애물 앞에서는 잠시 버벅대더라도 결국은 피해서 이동하는 모습을 보고 그 원리가 궁금했던 적이 있습니다. <br>
알고리즘을 공부하는 중 길 찾기 알고리즘에 대해 알게 되었고 이러한 알고리즘이 게임뿐만 아니라 지도, 내비게이션 등 최단 경로 탐색에 있어 주로 쓰이는 것을
알게 되어 직접 구현을 해보고 그 원리를 파악하고 싶었기에 최단 경로 알고리즘을 이용한 게임을 만들게 되었습니다.

## 개발 기간

- 기획
  - [2022.11.07 ~ 2022.11.13](https://www.notion.so/eb51050ccbd84cda8fff35496284f097)
- 개발
  - [2022.11.14 ~ 2022.11.26](https://www.notion.so/06bae5eaa5454a5ba605117906cf0057?v=bfd28deb2099447086e057251b75db68)

## 기술스택

- React
- Zustand
- Stitches
- Canvas
- React-testing-library
- Netlify

## 챌린지

### 길찾기 알고리즘
이번 프로젝트의 동기이기도 한 탐색 알고리즘을 구현하기 위해 DFS, BFS, 다익스트라 등 다양한 탐색 알고리즘을 알고 이번 프로젝트에서 맞는 알고리즘을 선정하였습니다. <br>
미로 탐색 게임의 경우 미로의 출구와 입구가 있기 때문에 출발 지점과 도착 지점이 정해져있고 이를 통해 최단 경로를 구할 수 있는 A* 알고리즘이 이번 프로젝트 핵심 구현 요소라고 판단하였습니다.<br>
A* 알고리즘은 다익스트라의 확장 개념으로 노드 간의 가중치에 휴리스틱 함수를 통해 얻는 추정값을 기반으로 최단 거리를 탐색하는 알고리즘으로 본 프로젝트는 2차원 배열의 좌표값을 기반으로 이동하고 값을 측정하기에, 
이번 프로젝트의 휴리스틱으로는 맨하튼 거리가 적절하다고 판단하여 적용하였습니다.
<br>
그래프와 노드를 이용하여 인접 노드에 접근을 하면서 최단 경로를 탐색하게 하였는데, 이렇게 구현한 알고리즘으로 최단 경로가 빠르게 탐색이 되어서 구현이 잘 되었다고 생각했었습니다.
<br>
기능 구현이 끝나고 테스트 코드를 작성하면서 알고리즘을 테스트하였는데 <br>

```[2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
[1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 4, 4, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1],
[1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1],
[1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1],
[1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1],
[1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 3],
1번이 이동가능, 4번이 장애물입니다.
```

해당 케이스처럼 장애물이 적어 탐색해야할 케이스가 많을 경우 약 10초 가까이 걸리는 것을 확인하였습니다.<br>
그래서 시간 복잡도 개선의 필요성을 느꼈고 힙(Heap)을 통해서 개선이 가능하다는 것을 확인하여
힙을 구현, 힙에서 fscore를 통해 우선 순위를 정해주어 알고리즘 개선을 하였습니다.
<br>
![스크린샷 2022-12-07 오후 5 30 34](https://user-images.githubusercontent.com/101446818/206921105-70cf8c31-c06e-44c1-b495-8796f542bcb1.png)
![스크린샷 2022-12-07 오후 5 32 39](https://user-images.githubusercontent.com/101446818/206921108-7efb7fb4-6b2c-4c28-ad15-c3f1480f8217.png)
<br>
그 결과 동일 성능에서 충분히 개선된 점을 확인 할 수 있었습니다. 

### Canvas를 이용하여 게임을 구현하기
개발 시작 단계에서는 자바스크립트 기반 게임 프레임워크인 Phaser3을 이용하여 게임의 맵, 캐릭터의 움직임, 물리엔진 등을 구현하였습니다.

Phaser3를 통해 게임의 완성도를 높이고, 알고리즘 구현에 비중을 둘 계획이지만 제가 원하는 게임의 기능을 구현하는데 굳이 프레임워크를 사용할 필요가 있는지에 대해서 고민이 되었고,
프레임워크의 도움을 받지 않고 직접 Canvas를 이용하여 직접 게임의 맵과 캐릭터를 만들더라도 프로젝트 개발 기한내 알고리즘을 구현하고 기능 구현을 완성할 수 있을 듯하여 Canvas로 게임을 구현하게 되었습니다.

Canvas를 통해 게임을 만들 때 가장 고민이었던 부분은 리렌더링을 어떻게 하는가? 였습니다.<br>
캐릭터가 이동할 때마다 맵과 캐릭터를 새롭게 렌더링해주어야 했기 때문에 최적화에 대한 부분이 고민이었고, 그 결과 유지, 보수를 고려해 기능별 Renderer 컴포넌트인 `MapRenderer, CharacterRenderer`라는 하위 컴포넌트를 만들어 Context API를 통해 Canvas에 접근 해당 요소를 렌더링하게 하였습니다. <br>

또한 게임 구성에 필요한 이미지들을 미리 렌더링시키는 일종의 ImageBuffer 기능을 수행하는 컴포넌트를 만들고, Renderer들은 `document.querySelector`를 통해 사전에 렌더링 된 이미지에 접근해서 Canvas에 그리게 하였습니다. 이미 렌더링 된 이미지에 접근해서 게임을 구현하기 때문에 리렌더링 시에도 효율적이고 오류를 줄일 수 있으리라 판단했습니다.


## 실행방법

조작키: WSAD - 상하좌우<br>
처음 실행 화면에서 Game Start 버튼으로 게임을 시작합니다.

## 회고

우선 이번 프로젝트를 진행하면서 아쉬웠던 부분은 함수형 프로그래밍을 제대로 도입하지 못한 것입니다.

이번 프로젝트에서 함수형 프로그래밍을 통해 재사용성과 코드 가독성을 향상시킬 수 있으리라 생각하였고 접목시키고 싶었습니다.
특히 유틸 함수 중 지연성을 갖게 한다면 시간 복잡도에서 개선이 가능하리라 생각했습니다.<br>
하지만 한정된 시간적인 상황과 아직 배움이 부족하여 제대로 적용시키지 못한 부분이 아쉽습니다. 그래도 프로젝트를 하면서
함수형 프로그래밍을 도입하기 위해 학습도 하였고, 프로젝트가 끝났지만 앞으로도 관심을 가지고 꾸준히 공부할 생각이기에 다음 프로젝트에서는 함수형에 어울린다면 접목시키도록 하겠습니다.<br>
<br>
이번 프로젝트를 통해 얻었던 부분은 탐색 알고리즘에 대해 더 깊이있게 학습할 수 있었던 부분입니다.

알고리즘 공부를 하면서 탐색 알고리즘은 낯설고, 어렵게만 느껴질 때가 많았는데 이번 프로젝트를 하면서 직접 구현을 해보고, 실제 게임으로 만들어 적용을 시켜보면서, 탐색 알고리즘에 대해 많은 학습이 되었습니다.<br>
또한 자료구조를 단순 지식으로만 알고 있고 왜 중요한지? 에 대해서는 실감하지 못하고 있었는데 Heap이라는 다소 낯선 자료구조를 통해서 시간복잡도가 개선되는 것을 확인하면서, 프로그래밍에 있어서 자료구조의 중요성을 다시 한번 느끼게 되었습니다. <br>
Phaser3를 사용할 때 Class 문법에 대해 학습할 수 있었고, 이러한 경험을 바탕으로 Node와 Heap을 구현할 때 Class로 구현해본 것도 좋은 경험이었습니다. 

프로젝트하면서 이중 for문을 사용할 때 이 코드가 가독성 측면에서 좋은지, 다른 대안이 더 좋을지 고민도 해보고 바꿔보면서<br>
간결하고 가독성 좋은 코드가 될 수 있게 노력했는데 앞으로 더욱 성장하여 깨끗한 코드를 만드는 개발자가 되도록 하겠습니다.
