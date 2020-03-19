# # https://www.geeksforgeeks.org/check-given-graph-tree/


from collections import defaultdict


class Graph:

    def __init__(self, vertices):
        self.V = vertices
        self.graph = defaultdict(list)

    def addEdge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)

    def is_Cyclic(self, u, visited, parent):
        visited[u] = True
        for i in self.graph[u]:
            if not visited[i]:
                if self.is_Cyclic(i, visited, u):
                    return True
            elif i != parent:
                return True
        return False

    def is_Tree(self):
        visited = [False] * self.V
        if self.is_Cyclic(0, visited, -1):
            return False
        for i in range(self.V):
            if not visited[i]:
                return False
        return True


g1 = Graph(5)
g1.addEdge(1, 0)
g1.addEdge(0, 2)
g1.addEdge(0, 3)
g1.addEdge(3, 4)
print("Graph is a Tree" if g1.is_Tree() is True else "Graph is a not a Tree")

g2 = Graph(5)
g2.addEdge(1, 0)
g2.addEdge(0, 2)
g2.addEdge(2, 1)
g2.addEdge(0, 3)
g2.addEdge(3, 4)
print("Graph is a Tree" if g2.is_Tree() is True else "Graph is a not a Tree")