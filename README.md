# The-Labyrinth
어린 시절 게임을 했을 당시 마우스로 해당 장소를 가리키면 유닛들이 이동을 하는데 장애물 앞에서는 잠시 버벅대더라도 결국은 피해서 이동하는 모습을 보고 그 원리가 궁금했던 적이 있습니다. <br>
알고리즘을 공부하는 중 길 찾기 알고리즘에 대해 알게 되었고 이러한 알고리즘이 게임뿐만 아니라 지도, 내비게이션 등 최단 경로 탐색에 있어 주로 쓰이는 것을
알게 되어 직접 구현을 해보고 그 원리를 파악하고 싶었기에 최단 경로 알고리즘을 이용한 게임을 만들게 되었습니다.

### 배포
https://www.the-labyrinth.online/

## 목차

- [개발 기간](#개발-기간)
- [기술스택](#기술스택)
- [챌린지](#챌린지)
- [실행방법](#실행방법)
- [회고](#회고)

## 개발 기간

- 기획
  - [2022.11.07 ~ 2022.11.13](https://www.notion.so/eb51050ccbd84cda8fff35496284f097)
- 개발
  - [2022.11.14 ~ 2022.11.26](https://rust-spade-c0e.notion.site/06bae5eaa5454a5ba605117906cf0057?v=fb0d338a59e3465fabb55302fa01ea9f)

## 기술스택

- React
- Zustand
- Stitches
- Canvas
- React-testing-library
- Netlify

## 챌린지

### 길찾기 알고리즘
이번 프로젝트에서는 탐색 알고리즘을 구현하는데 여러 가지 알고리즘 중에서 DFS, BFS, 다익스트라 등을 고려하였습니다.<br>
미로 탐색 게임에서는 출발 지점과 도착 지점이 정해져 있기 때문에 최단 경로를 구하기 위해 A* 알고리즘을 채택하였습니다.

A* 알고리즘은 다익스트라 알고리즘의 확장 개념으로, 노드 간의 가중치에 휴리스틱 함수를 이용하여 추정값을 계산하여 최단 경로를 찾아냅니다. 이번 프로젝트에서는 2차원 배열의 좌표값을 이용하여 이동하고 값을 측정하기 때문에, 상하좌우 이동만을 가정하고 맨하튼 거리를 휴리스틱으로 선택하여 적용하였습니다.<br>

 그래프와 노드를 이용하여 인접 노드에 접근하면서 최단 경로를 탐색하는 알고리즘을 구하였고, 이렇게 구현한 알고리즘으로는 최단 경로를 빠르게 탐색할 수 있다고 판단하였으나, 테스트 코드를 작성하면서 장애물이 많지않을 경우 탐색 시간이 오래 걸리는 것을 확인하였습니다. 

 
<img src="https://user-images.githubusercontent.com/101446818/228638397-ae0fbd0d-fbd8-4198-a741-eca079fc0151.png"  width="400" height="400"/>


해당 케이스처럼 장애물이 적어 탐색해야할 케이스가 많을 경우 약 10초 가까이 걸리는 것을 확인하였습니다.<br>
그래서 성능 개선의 필요성을 느꼈고 자료를 보던 중 힙을 통해 개선이 가능하다는 것을 확인하였습니다. 
![스크린샷 2023-03-30 오전 3 59 10](https://user-images.githubusercontent.com/101446818/228640969-dfb1e925-6f0e-41e9-a801-436e5416fe5e.png)
출처 : https://en.wikipedia.org/wiki/A*_search_algorithm

- ###  HEAP
 알고리즘을 학습하면서 자료구조에 대해서는 연결리스트, 해시테이블, 트리 등을 학습하였지만 힙이라는 자료구조는 저에겐 다소 낯설었습니다. 과연 힙은 어떠한 자료구조이길래 힙을 통해서 알고리즘의 성능을 개선시킬 수 있을지 궁금했습니다.
  ![230070231-a27839ed-bfbd-44f0-a24d-4a6913f33e7d (1)](https://user-images.githubusercontent.com/101446818/230562988-bbd51f12-730b-4cad-bb3e-b73a6798a051.png)

출처 : https://guides.codepath.com/compsci/Heaps<br>
 힙을 알아보면서 이 그림을 보고 가장 먼저 떠오른건 자료구조 이진트리였습니다. 이 이진 힙(Binary Heap)은 이진 트리(Binary Tree)를 기반으로 하는 자료구조 중 하나로, 우선순위 큐(Priority Queue)를 구현하기 위해 사용됩니다.<br>
 그림에 나와있듯 이진힙은 이진 트리의 특성을 가지며 부모 노드가 자식 노드보다 항상 작은 값을 가지고 있고 최상위 노드(root node)는 전체 노드 중 가장 작은 값을 갖는 이진 힙인 최소힙, 최소힙의 반대로 가장 큰값을 갖는 최대힙이 있습니다. 

이진힙을 구현한다면 root node의 데이터는 최소값 또는 최대값이니 데이터의 우선순위를 정해주고 우선순위가 높은 데이터가 가장 먼저 나오는 우선순위 큐로 이용할 수 있는것입니다. <br>
<img src="https://user-images.githubusercontent.com/101446818/230555391-33525191-9e5b-4a3e-b3ac-7a2641032442.jpg"  width="600" height="400"/> <br>
 그림처럼 노드가 들어온다면 bubble up을 통해 부모노드가 자식보다 큰값이면 부모와 자식의 위치를 교환하면서 올라가는 방식을 통해 최상위 노드에 Fscore가 최소값인 노드를 배치하게 하는 최소힙을 구현해 우선순위 큐로써 활용하면, A* 알고리즘에서는 인접 노드 중 Fscore가 가장 작은 값들을 우선 탐색하면 더 효율적인 탐색이 가능하기에 이전 구현했던 알고리즘의 성능을 개선시킬 수 있었습니다.  



이렇게 개선된 알고리즘 이용하여 최단 경로를 빠르게 탐색할 수 있었고 테스트 결과 동일 케이스에서 이전보다 약 10배이상 빠른 결과를 보여주었습니다.
<br>
![스크린샷 2022-12-07 오후 5 30 34](https://user-images.githubusercontent.com/101446818/206921105-70cf8c31-c06e-44c1-b495-8796f542bcb1.png)
![스크린샷 2022-12-07 오후 5 32 39](https://user-images.githubusercontent.com/101446818/206921108-7efb7fb4-6b2c-4c28-ad15-c3f1480f8217.png)

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
이번 프로젝트에서 추상화를 높여 간결하고 재사용성이 높은 함수들을 만든다면 더욱 완성도 있는 코드가 된다고 생각하였기때문에 함수형 프로그래밍을 접목시키고 싶었습니다.<br>
하지만 한정된 시간적인 상황과 아직 배움이 부족하여 제대로 적용시키지 못한 부분이 아쉽습니다. 그래도 프로젝트를 하면서
함수형 프로그래밍을 도입하기 위해 학습도 하였고, 프로젝트가 끝났지만 앞으로도 관심을 가지고 꾸준히 공부할 생각이기에 다음 프로젝트에서는 함수형에 어울린다면 접목시키도록 하겠습니다.<br>
<br>
이번 프로젝트를 통해 얻었던 부분은 탐색 알고리즘에 대해 더 깊이있게 학습할 수 있었던 부분입니다.
알고리즘 공부를 하면서 탐색 알고리즘은 낯설고, 어렵게만 느껴질 때가 많았는데 이번 프로젝트를 하면서 직접 구현을 해보고, 실제 게임으로 만들어 적용을 시켜보면서, 탐색 알고리즘에 대해 많은 학습이 되었습니다.<br>
또한 자료구조를 단순 지식으로만 알고 있고 왜 중요한지? 에 대해서는 실감하지 못하고 있었는데 Heap이라는 다소 낯선 자료구조를 통해서 성능이 개선되는 것을 확인하면서, 프로그래밍에 있어서 자료구조의 중요성을 다시 한번 느끼게 되었습니다. 


Phaser3를 사용할 때 Class 문법에 대해 학습할 수 있었고, 이러한 경험을 바탕으로 Node와 Heap을 구현할 때 Class로 구현해본 것도 좋은 경험이었습니다.<br>
프로젝트하면서 이중 for문을 사용할 때 이 코드가 가독성 측면에서 좋은지, 다른 대안이 더 좋을지 고민도 해보고 바꿔보면서
간결하고 가독성 좋은 코드가 될 수 있게 노력했는데 앞으로 더욱 성장하여 깨끗한 코드를 만드는 개발자가 되도록 하겠습니다.
