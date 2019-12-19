import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                //Project 1
                < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                }>
                    < CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }
                    }> React Project #1</CardTitle >
                    <CardText>
                        This is a project that I've done using React and React
                        Router - it was the final project in my General Assembly Software Engineering Immersive course.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/bnmlucky/wellness_app" target="_blank" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{ color: 'fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </ Card >
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        < CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/3200/1*DiNIG4Bfpm65_wwXf_JwMA.png) center / cover' }
                        }> Frowsy: MongoDB/React project</CardTitle >
                        <CardText>
                            This is a project with MongoDB and React - it was a group project in my General Assembly Software Engineering Immersive course. This project is a self-organization app.
                    </CardText>
                        <CardActions border>
                            <Button href="https://github.com/bnmlucky/frowsy-back-end" target="_blank" colored>GitHub (backend)</Button>
                            <Button href="https://github.com/bnmlucky/frowsy-front-end" target="_blank" colored>GitHub (frontend)</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </ Card >
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        < CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/3200/1*DiNIG4Bfpm65_wwXf_JwMA.png) center / cover' }
                        }> ToDoApp</CardTitle >
                        <CardText>
                            This is a project with MongoDB and Express: a todo app/shopping list. Users are able to add images to their todo list items.
                </CardText>
                        <CardActions border>
                            <Button href="https://github.com/bnmlucky/toDoApp" target="_blank" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </ Card >
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                }>
                    < CardTitle style={{ color: 'black', height: '176px', background: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDg8QEA8ODQ0WEBIQDQ8NDQ8QDxAQFRYWFhUVFxYZHjQhGBolGxcWITEhJSkrLi4uFx8zODMsNygtLi4BCgoKDg0OGxAQGjAlICYuLS4vLTA3LS0rLS4wLS0tLS0tMTUuMysvLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABOEAABAwICBQQNCAcFCQAAAAABAAIDBBEFEgYTITFRBxZBkRQiMlJTVIGSoaPB0dIVI2FiY3GTohczQrHC0+EkQ3SU4zU2REVygpWys//EABoBAQACAwEAAAAAAAAAAAAAAAAEBQIDBgH/xAAzEQEAAQMBAwoGAgMBAQAAAAAAAQIDEQQFUqESFBUhMVFhcbHRMkGBkcHwI+ETIkIzYv/aAAwDAQACEQMRAD8A68gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPl7rAngCUFC5P+Ur5WqpKfsPsXJA6bP2Vrb2exuXLqxbu73v0IMycpNsbGFdh3+fbD2R2VxaDm1er+ndmQQeL8tQp6mop/k0yaqaSHP2dlzZHFua2qNr2va5QfWB8tAqaumpvk4x66eKDP2dmyax4Zmy6oXte9rhBsV/LFHBiEtHNRFsUdS6CSpbVZrNa8tMmr1fDblv5SgmdP8AlGgwowMbD2bNI0yZGTiNrIv2Xl2U3zG9hboO3dcNKu5UBFhFLifYWbXTvh1HZdsmUv7bPq9vcbso3oLbonjXZ9DT1eq1Gta52r1msy5XuZ3Vhfub7ulBLoCAgICAgrGn2lvyVTxTdj9lZ5tVk12py9o5175XX7m1rdKCinlyt/y1v/kf9FBYdJuUvsKDDpuwtd2XTCoy9l5NVdrDlvqzn7vfYbtyCvHlxtvwwD78R/0UFkxvlH7Gw2gruw9Z2Vf5rsrLqrAnu9Wc27gEFbPLjbfhgH34j/ooOi6GaQ/KVDHV6rsfO6Rur1uttkcW3zZRe9r7kE4gICAgICAgICD5ugXQEBAQLoF0HzN3Lv8ApP7kH5T0PosTmne3DHTtqBEXSGnqRTu1WZoN3FwuMxbsvwQTGicFVHpJSMrDIawVTBOZZdbIXW6X3ObZbpQdI5asFpI8LknjpaWKodUxl80dPE2VxcXF13gXNzv27UHryNYLRvwmmqH0lLJUiaVzZ308TpmuZIcpDyLgiwtt2WQctxnBpK7SGupYiBK+qrDHm3FzBJIG/RfLa/RdBFT4JVGhkrpzI2Nk8VEwTZs7nBjrtF9oaxrA230gdBQWnG/90cK/x03750F25PNPsKpcJo4J6xsU7GPEjDDO4tJke4bWsI3EIOl0dUyaKOaN2eKRjZInWIzMeA5psdouCN6D2ugXQEC6Ag5ny9f7PpP8YP8A5SoPfk50gwyLCKOOeqoYp2tk1jJpoWyNJlkIuCbjYQgnNMosKq6NkNXVUkEcjNbRTPnhYRsGWSIuPbCxF7bCCg49oppJJgtdJG58VZRF4FQKaRk0Ujf2ZonA2zAdHTuO0AgO0Y/PhVXQNFVUUzaKdt4JZJo4gXWuHRudue30bQekIOJ4Vi0mB4k7UzwYhSmwkMEsckVTBc5TdpIZKNuw7jfeDch+gcFxSCrp46incHwvF2kCxB6WuHQ4HYQg3boF0BAQLoF0C6BdAQYugICBdAQLoF0GHC4I4iyCoaG8ndJhdQ+eCapke6Iwls7oi3KXNdcZWg3uwdZQZfyeUhxX5U1tT2TrRNq80WpzAAWtlvbZxQS+lmjsOJUppZnyxxl7ZC6EtD7tvbugRbbwQfWi2ARYdSMpYXSSRtc9wdMWl93G5vlAHoQQtDyeUkOKHE2zVJqDLLNkc6LVZpQ4OFg29hnNtvQEElpZorT4lTCmldJDEJtfen1bXF9n3vdpG0vcTsuSgiavk2o5MNp8OdNVCCGV0zHh0WtLnZ7gnJa3bno4IIX9COG+M1/4lP8Ay0HRcLom09PBTsLnMihjhYX2zFsbQ0E22XsEGzdAQLoCBdBA6YaLQYpDHDPJNE1kutaYCwOLsrm2OZpFrOKCp/oYw/xqv8+n/loJnHuTqkrIaKKSaqY2lgFPCY3RBzmAMF33YRftBusghv0MYf41X+fT/wAtBMYhyc0k1BSULpqoQ07pHRPa6LWOLySc12W/aO4BBD/oYw/xqv8APp/5aC56K6PxYdSimhfLJGHvfmmLS+7zc9yAPQgl7oCAgXQLoF0BAQLoMICAgICAgIOeVmklayWVgm2Nke0fNRbmuI736FS16u9FUxn5z3OqtbN0tVumrk9sRPbPd5vLnRXeG9VF8Kx55e7/AEbOi9Lu8Z9znRXeH9VF8Kc8vd/odF6Xc4z7nOiu8P6qL4U55e7/AEOi9Lu8Z9znRXeH9VF8Kc8vd/odF6Xd4z7nOiu8P6qL4V7zy93+h0XpdzjPuc6K7w3qovhTnl7v9DovS7vGfc50V3h/VRfCnPL3f6HRel3eM+5zorvD+qi+FOeXu/hB0XpdzjPuc567om29HzUPwrznl7e4QdF6Td4z7ukK8ciICCpaeYvU0vY5gk1YdrA/tI3XLcmXugeJU/Q2bdzlcuO78q/XXrlrk8icdv4VPnliPjHqYPhU/mVjd4ygc9v73CDnliPjHqYPhTmVjd4yc9v73CDnliPjHqYPhTmVjd4yc9v73CDnliPjHqYPhTmVjd4yc9v73CDnliPjHqYPhTmVjd4yc9v73CDnliPjHqYPhTmVjd4yc+v73CDnliPjHqYPhTmVjd4yc+v73CDnliPjHqYPhTmVjd4yc+v73CDnliPjHqYPhTmVjd4yc9v73CF00FxOoqYJXzyawiXIw5GNsA1pPcgcVW621RbqiKI+Sy0N2u5RM1znrWVQ00QEBAQEBBhAQEBAQEBBy/SBmWsqB9q4+d23tVBqIxdq83aaGrlaeifCPZHrSlCAgIN4NHAdQWrLBnKOA6gmQyjgOoJkMo4DqCZHjRNzVETeMzB1vAW+38VMeMerG9OLVU+E+jq5XRuGEBBTeU1n9np3cJi3zmOP8Ksdmz/vVHh+VbtKP9KZ8fw52rdTiAgIJXBWAh9wDtG8A8VjU13JSOpZ3jfNCxa8yalneN80IZk1LO8b5oQzKMxpoGrAAHdE2AHBZUtlte+TmO1BfvppHdWVv8Kp9oTm99IdBs+MWc+MrQoKcICAgICAgwgwgIMoCDCAg5zpay1dN9OR35G+5UesjF6r6ejrtl1Z0tP19ZRdM0GSMO7kvaHWNu1JF/QtFMRNURKbcmYomY7cS6GdDKLhL+KfcrfmNrxcx0vqfD7HMyi4S/in3JzG14nS+p8PsxzMouEv4p9ycxteJ0vqfD7JEaF0dt0v4v8ARY9H2fH7nS+o8Pscy6PhL+L/AETo+z4/c6X1Hh9jmXR8Jfxf6J0fZ8fudL6jw+yg4pE2OomYy+Rsj2NubmzSRv8AIqa7TFNyYp7InDotPVVXapqq7ZiJ+7W0fZmrKcfatd5vbexSNPGbtMeLDXVcnTVz4evU6cr9xjKAgrHKJHegv3s0buu7f4lN2fOL30lB2hGbOe6YcxV2o180EwGjqqV75odZI2ZzM2tlb2uVjhsa4D9oqs1mou27kRTPVjwWmi09q7bmao68+Kx8y8N8W9fUfGonPb+9wj2S+Y2N3jPucy8N8W9fUfGnPb+9wj2OY2N3jPu3MP0Rw9odlp7br/PTn97l5zy9vens8nQaef8AnjPu2+atD4D1s3xJzu9vejzo/T7vGfc5q0PgPWzfEnO7296HR+n3eM+6u6Z4TTU8cWpjyOc83Od7rtA3bTxIUzR3rlyqeVKv2jprVmmnkRiZnxc8xs9u0fVv1k+5WNKvt9jo2g8eXDqf6dY7rkcqPWzm9V9PR0eijFin6+qeUVKYQEBBlBhBlB8oCAgICAgIKFpuy1WDxhYfS4exU+vj+X6R+XU7HnOnx3TP4V+9tvDaoWcda1xnqdnY64B4gHrXSw4KYxOEDjGlMdNMYnRSvIDXZmlliCL9JUS9q6bVXJmJWOl2ZXqLf+SmqI+7S59weAm64/etXSFG7PBI6Eu78cUgNO4bfqJutnvWPSdG7PA6Fub0cTn5D4CbrZ706To3Z4POhbm9HE5+Q+Am62e9Ok6N2eB0Lc3o4qNWzZ3yv3ZnPf5xJ9qqap5VUz3y6C3TyaYp7oiHroiy9bD9Ae78jh7VM0cZvR9fRE2pVjS1eOPWHRVeOREBBB6bR5sOqPoDHebI0n0KVopxfp/fki62M2Kv35uUK+c+sei+lZoY5IxAJg5+e5lyWNgLdyb7gomo0kXpic4TNNq5s0zGM5TX6SneJt/zR/lqP0bG/wAP7SOk53OP9H6SneJt/wA0f5adGxv8P7Ok53OP9JDC+UJzw7+yAWI/4knj9ReTs6I/64f2wq2rMf8AHH+m9z8d4qP8wfgXnR8b3D+2PS9W5x/pasJrDPBHKW6svbmy5s1tp6bbVAu0ciuae5bWLk3bcVzGMqpyiv7amb9Eh68g9hU/Z8dVU+X5VO1566I8/wAOZYwfnfuaB+8+1Wkdiuo7HVNGmZaGlH2EZ84A+1c9qZzdq85dLpoxZp8oSS0t4gICAgICDCAgICAgICCl6es+dhdxjcOp1/4lVbQj/amfB0exKv4648fx/SrlV67dewqTNTQO4wxnraF0Nqc0Uz4Q4fUU8m9XT3TPqqGmuFTyVQfFDJI0wtBLGkgOBds6rKv1lmuq5mmM9XuvNlaq1bsTTXVETme36IH5CrPFp/wyonN7u7Ky57p9+Pu3xgdZ4tP+GVq5te3ZY880+/H3PkOs8Wn/AAynNr27JzzT78fdh2CVYBJp5gALkmM7AnNru7L2NZYnq5cfdGzHtT9y0x2pKT0IZerJ4QvPWWj2qy0Efy/Sfwq9szjTxHjHpK+K4cuICCO0jZmoqofYSHyhpPsW7Tzi7T5w06mM2avKXHl0TmxAAR6nuZuJeKn8aD4lG55Y3vX2SeZ393jHuk8H0SxBofenI2j+9h+n6yxq1lne9WuvQ6if+eMe6R5rV3gD+LF8Sx53Z3vVj0fqN3jHu6Fg9OY6aCNws5sTGuGw2cAL+lVF2qKrk1R3ug09E0WqaZ7YiFM5QJL1MbeEIPW53uVloI/jmfFTbVq/liPD8y5virvnZPJ6AFY0oVPwuxUMeWGJvexsb1NAXNVzmqZ8XVURimIe6xZCAgICAgIPlAQEBAQEBBVNPWbKd3AyN68p9irdox8M+f4X2w6uuuny/PuqCrHQOq6MPzUNMfsw3zSW+xX2lnNmnycbtCMamvz9etJrehiCRbuCDKDSxqTLS1DuEMhH35StV+rk2qp8Jb9LTyr1EeMerj1R3J8i5untdrHanNA2/Ozu4MaOsk/wq02fH+1U+Cm23P8AHRHjPp/a5K1c4ICDxrGZopG99G9vW0hZUTiqJY1xmmYcUbuC6aXLx2MoMO3FIJ7He6eTMxjuLGu6wCuYqjEzDqaZzGW7RnuvJ7V49bN0BBzfTd96544MY30ZvarnRRi193ObSnOonyhz+obnmc3vpMo8psp2cRloojOIdpK5h1TCAgICAgICDF0C6BdAugXQLoF0Fc05benjPCYdRa7+igbQj+OJ8fxK42LOL1Uf/P5hSVUumTmFYVXzRB8D3iK5AAqSwAg7e1vs2qVas3q6c0T1eeFdqNVpbVzk3YjPlljFKSvpmtdLLK1rjlblqnu22v0FeXbd61Gapn7y9093SX5mLdMdXhHsjflCfw8/48nvWn/JXvT95Sv8Frcj7Q3xiFR4ef8AHk961f5bm9P3lj/gtbkfaFu5PppHvqC+SSQBsYGeRzgCS7dc/QrLZtVVVVWZmez8qbbFFFFNEUxEdvZGO5PaVyZaGoP1MvnEN9qmaycWKvJXbPpzqaPP063Jao9r5VQU9rsIWXQNna1DuLmN6g4+1W+zo6qp8lBtyr/aiPP8LVdWKiLoF0AIOJzMyvc3g5zeokLp4nMRLl6oxMw2cIw59VOyCNzGvdmymQkN7VpcdwPQCsLtyLdM1SytW5uVxRCx/o7rPCUvny/AonSNrunh7pnR13vjj7Khf71PV6XwPc/7x+4rGpruJemZmkY3vntb1kBa6pxEyxojNUR4w7Euddg5dpS/NXVB+u0eaxo9ivdLGLNP783L66c6iv8AflCnYU3PWQDjUx9WcErfenFuqfCfRlYjNymPGPV2G65t0xdAugXQLoF0C6BdBhAQEBAQEBBCaYNvRvPB7D+a3tUTXR/DP0WeyZxqYjvifTKhKldW6DyfSXpJB3s7gPuLWH991b7PnNuY7p/EOY21Ti/E99MestnTLDZainY2Fud7ZQ8tzNaS3K4G1/pIWestVXKIimOuJ/EtWy9RbsXZm5OImMcYc9q6KaHZLFJF9L2EA/cdxVRXRVR8UYdPbvW7vwVRPk3qSkll2RRvlPTq2F1vvI3LTRRVXP8ArGXly7Rb665iPNf9CcKmp45TMzVue5uUFzScoB32OzernQWa7dM8uMZc5tTU271VP+Oc4y9dOX2oXji+MfmB9iy2hP8ABP09WGyozqY8In0cuq9wVJS6qFt0IZamkPGY+hrVdbPj+OZ8fxDm9tVZv0x/8/mViU5TiAgXQcdxqPLV1LeE8vVnNl0dmc26Z8Ic1ejFyqPGfVu6GyZcRpD9oW+c1zfasNVGbNTZpJxfp8/w7KFz7oXJsV0Lro3vcyITR5nFpheHHKSSLtNje3AFXlvW2qoiJnE+Kiu6K9TMzEZjweOB0E95GaibWXb2hhfmG/otdb6rlGM5jCDXauTOIpnPlK34NovV66GR7GxMbIx7tY8Zi1rgSABfbs6bKHe1dvkzTE5nCVp9Be5dNVUYiJievwl0JVDoXI8blvU1LvtpT5A429C6CzGLdPlDkr88q9VPjPqgdE2Zq+mH1y7zWud7E1c4s1JmkjN+n9+TrC590IgICAgICAg+boF0C6BdAugXQLoI3SRuajnH1Q7zSD7FH1UZs1Juzqsaqjz9Yc7VE7FatC8agp2yxzPMeZ7XMOVxbusb23dCn6O/RbiYqntU21dHdvTTVbjOIXilrIpReKSOUfUeHfu3K0prprjNM5c9ctV25xXTMeb2IuLHaOkHcsmtIRtAAAAAtsAFgF5D2ZzOZedTVRxC8kjI28Xva0eleVV00RmqcMqLddc4oiZ8lM00x2nnhbFC/WOEoc4hrg2wa4bzv2kblVa7U27lMU0TnrXuzNHdtXJruRiMeyi1e8KvpXkLtog21Gw8XSH8xHsV5of/ABj6+rldrTnVTHdEemUzdS1aXQLoF0HKdLGZa+pH1w7zmNd7V0GknNmn9+bntXGL9X78oaWGVWpqIZbEhkrJCBa5DXAkD6bLbcp5VE098NNurkVxV3S6pQaaUEtvntQ7vahpZb/u7n0qkr0V6n5Z8v3K8o1tmr548/3Ceila9ocxzXt6HMcHNPlCjTEx1SlRMT1w3aPcfIvHr0mnYwZnuaxvF7g0dZXsUzPVEMaqqaYzVOENWaW0ce57pncIW3HnGw9Kk0aO7V8seaHc2jYo7Jz5fuHM8Rlu2Z/SQ93lNyrqmMREOdmeVXnxa+grL18Z71kjvy5f4lH104sz9FloIzfjyl026o18XQLoF0C6BdAugXQYQEBAQEBAQauKszU844xSf+pWq9GbdUeEt+lq5N+ifGPVzRc+7cQZa4gggkOG4g2I8qR1Tl5MRMYlLUektZFumdI3vZgJB1ntvSpFGqu0dlX36/7QruztNc7aceXV/XBI1elFbL/e6pvewjJ6e69K116y9X88eX7niwt7N09v/nPn1/1wRMjy45nEud0ucSSfKVGmZmcymxEUxiHwSBv2I9atQ4E7NuxZ0wyhf9HWZaOAfUzecS72q/0sYs0+TjtoVZ1Nc+Pp1JFSEMQEBBzTTqO1e899HG78uX+FXmgnNmPOVFr4xfnyhX1MQhB601TJE7NFJJE7vonuYesLyqmKuqqMsqappnNM4WrCNKK90b2uqXkAjbljD7W74C6jTpLMTnks7mtv4xyvR8TSuecz3Oe7vnuLj1lbYiI6ohDqqmqc1Tl8r140cRqWat7Q4FxFgAbnevYhnTTOW5yeR3q5HcIHdZcz3FQ9oz/HEeK12dH8sz4fl0NUy6EBAQEBAQEGEBAQEBAQEHy9twQdxBB8q8mMxh7TOJiYVOp0QeP1UrXcGyNLT1j3Ksr2fMfBP3dDa23TP/pRjy6/37oiqwapj7qF5HfMGcfl3eVRa9Ndo7afysbWu09z4a4+vV6tBaEsQbBqeA61hyWOHm6d3G33LLEQ9w2qbCamXuYnkd84ZW9bt630ae5X8NP4RrutsWvirj19EvS6IyHbLKxg4MBees2A9KlUbPqn4pwrru2qI/8AOmZ8+r3WqlgEcbIwSWta1gJ3kAWuVZ0URRTFMfJQXbk3K5rn5zMvVZNYgICCvaRaMNq5BKJTFIGBliwOYQCSOkEHapmm1c2aeTjMIWp0cXquVnEqrWaH1kfctZO3jE8X811j1XVhRrrNXbOPNX16C9T2RnyQlRA+M5ZGPjdwkY5p9KlU1U1ddM5RKqaqZxVGHmsmLdw+tEQdcFxJFrWsvJjLGqnL6lxaQ9yGsHWfT7k5LyLcPKJk85sxss54Ma5wHVsCxqqpo+KcNlFuavgjPkmKLQ2rfYvEcDftH5ndTb+khRa9fap7OtNo2feq7epbNHNHW0Ze7WGV7gGuOUNaADfYP6qu1Oqm9iMYiFjptLFnM5zMpxRUsQEBAQEBAQYQEBAQEBAQEBAQa9VRQy/rI2P+lzRm696112qK/ijLda1F218FUwiKrRSB3cOfEegXzt6jt9Ki16C3PwzjisbW2b1PxxFXCfbg+aXROFv6x75TwHaN9G30ryjQUR8U54fv3e3dtXqvgiI4z7cExS4fDF+riYw8Q0F3nHapdFmij4YV13U3rvx1TPp9uxsrY0CAgICAgICAg+ZI2uGVzWvb0tcAQfIV7EzHXDyYieqUNWaKUUl/mtU7jC4s/L3PoUmjW3qfnnz/AHKLXorNXyx5fuEU3QOPPtqJDH3ojaH+du9CkdJVY+Hr/f3tR+jKc/FOOP79ExR6MUUW6ESO76YmT0HZ6FGr1l6v548upJo0dmj/AJz59aXY0AWADR0ACwHkUaZz2pUdXYygICAgICAgICAgwgICAgICAgICAgXQEC6AgICAgICAgXQEBAQEC6AgICBdAQEBAQLoCAgXQYQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGEGUBAQEBBhBlAQEBAQEBAQEBAQEBAQEBAQEBAQEBB//2Q==) center / cover' }
                    }> Funny Fortunes </CardTitle >
                    <CardText>
                        This is my very first project where I used HTML, CSS, JavaScript, jQuery and Giphy API.  This is a fortune-telling app.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/bnmlucky/bnmlucky.github.io" target="_blank" colored>GitHub</Button>

                    </CardActions>
                    <CardMenu style={{ color: 'fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </ Card >
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>HTML/CSS/jQuery</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}
export default Projects;