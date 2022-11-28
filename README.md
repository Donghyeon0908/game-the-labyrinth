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

어린 시절 게임을 했을 당시 마우스로 해당 장소를 가리키면 유닛들이 이동을 하는데 장애물 앞에서는 잠시 버벅이더라도 결국은 피해서 이동하는 모습을 보고 그 원리가 궁금했던 적이 있습니다. <br>
알고리즘을 공부하는 중 길찾기 알고리즘에 대해 알게 되었고 이러한 알고리즘이 게임뿐만 아니라 지도, 내비게이션 등 최단 경로 탐색에 있어 주로 쓰이는 것을
알게되어 직접 구현을 해보고 그 원리를 파악하고 싶었기에 최단 경로 알고리즘을 이용한 게임을 만들게 되었습니다.

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

출발지점에서 도착지점까지 최단경로를 구하기 위해 A* 알고리즘을 활용하였습니다.<br>
A* 알고리즘은 노드간의 가중치에 휴리스틱 함수를 통해 얻는 추정값을 기반으로 최단 거리를 탐색하는데 휴리스틱 함수으로 현재 2차원 배열의 좌표값을 기반으로 값을 측정하는데 맨하튼 거리가 적절하다고 판단하여 적용하였습니다.
그래프와 노드를 이용하여 인접 노드에 접근을 하면서 최단 경로를 탐색하게 하였는데, 이렇게 구현한 알고리즘으로 최단경로가 빠르게 탐색이되어서 구현이 잘 되었다고 생각했었습니다.  


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

해당 케이스처럼 장애물이 적어 탐색해야할 케이스가 많을 경우 약 14초가까이 걸리는 걸 확인하였습니다.<br>
그래서 시간복잡도 개선의 필요성을 느꼈고 힙(Heap)을 통해서 개선이 가능하다는것을 확인하여
힙을 구현, 힙에서 fscore를 통해 우선 순위를 정해주어 알고리즘 개선을 하였습니다.
<br>
![비교1](https://user-images.githubusercontent.com/101446818/204138381-391e5c61-e96d-4f4a-8852-f06c2e5cc09b.png)
![비교2](https://user-images.githubusercontent.com/101446818/204138686-ecaf5a55-aed2-4f6a-b0cd-dfddf98e60b8.png)
<br>
그 결과 동일 케이스에서 테스트를 하여 성능에서 충분히 개선된 점을 확인 할 수 있었습니다.

## 실행방법

조작키: WSAD - 상하좌우<br>
처음 실행 화면에서 Game Start 버튼으로 게임을 시작합니다.

## 회고

첫 개인프로젝트인만큼 욕심도 있었고, 정해진 기한내에 개발을 끝내야한다는 불안감도 있었습니다. <br>
배포까지 끝낸 지금 남은 감정은 아쉬움입니다. <br>


첫번째 아쉬움은 함수형 프로그래밍을 제대로 도입하지 못한 부분입니다.<br>
이번 프로젝트에서 함수형 프로그래밍을 통해 재사용성과 코드 가독성을 향상 시킬 수 있으리라 생각하였고 접목시키고 싶었습니다.
특히 유틸 함수 중 지연성을 갖게 한다면 시간복잡도에서 개선이 가능하리라 생각했습니다.<br>
하지만 한정된 시간적인 상황과 아직 배움이 부족하여 제대로 적용시키지 못한 부분이 아쉽습니다. 그래도 프로젝트를 하면서
함수형 프로그래밍을 도입하기위해 학습도 하였고, 프로젝트가 끝났지만 이부분은 관심을 가지고 꾸준히 공부할 생각이기에 다음 프로젝트에서는 함수형에 어울린다면 접목시키도록 하겠습니다<br>


두번째로는 게임의 디테일적인 부분에서 아쉬움이 남습니다.<br>
처음에는 phaser3를 활용하여 개발을 시작하였고, 물리엔진, 프레임을 적용하여 애니메이션효과도 자연스럽게 주었지만 개발하는데 라이브러리에 의존성이 너무 심한듯하여 제거하고, canvas에 context API를 통해 렌더링하는 방식으로 변경하였습니다.<br>
라이브러리의 도움을 받지않고 직접 해봤다는 것은 의의를 두고 싶습니다만
requestanimationframe 통해 애니메이션효과를 자연스럽게 주는 것이 어려워서 일단 후순위로 둔 뒤에 알고리즘 및 기능 구현에 집중하였는데 해당 부분은 결국 개선하지 못해 디테일을 살리지 못한 듯 하여 아쉽습니다.
<br>


아쉬움 가득했지만 이번 프로젝트를 통해 알고리즘에 대해 더 깊이있게 학습할 수 있었으며 알고리즘 개선을 통해 자료구조의 중요성을 다시 한번 느끼게 되었습니다. 이번 경험을 바탕으로 앞으로 더 성장할 수 있도록 하겠습니다.
