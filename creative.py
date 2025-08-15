from typing import List
import copy


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        res = []
        suboard = [['.'] * n for i in range(n)]
        col = set()
        diagn= set()
        diagp = set()

        def backtrack(i):
            # print(suboard)
            if i == n:
                final = [''.join(suboard[r]) for r in range(n)]
                res.append(final)
                return


            for j in range(n):
                # print("first: ",i, j)
                if j not in col and (i - j) not in diagn and (i + j) not in diagp:
                    # print("second: ",i, j)
                    # print(suboard)
                    suboard[i][j] = 'Q'
                    col.add(j)
                    diagn.add(i-j)
                    diagp.add(i+j)
                    # break
                    backtrack(i + 1)
                    suboard[i][j] = '.'
                    col.remove(j)
                    diagn.remove(i-j)
                    diagp.remove(i+j)


        backtrack(0)
        return res



c = Solution()
r = c.solveNQueens(5)
print(r)


