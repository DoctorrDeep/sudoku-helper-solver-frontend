.PHONY: run build

build:
	@docker network inspect sudoku_solver_net.local >/dev/null 2>&1 || \
	  		docker network create -d bridge sudoku_solver_net.local
	@docker build -t sudoku_solver_fe_img:v1.0 -f Dockerfile .

build-production:
	@docker network inspect sudoku_solver_net.local >/dev/null 2>&1 || \
	  		docker network create -d bridge sudoku_solver_net.local
	@docker build -t sudoku_solver_fe_img:v1.0-prod -f Dockerfile-production .

run-native:
	@npm start

run:
	@docker run --name=sudoku_solver_react_fe \
				--network=sudoku_solver_net.local \
				--rm=true \
				-p 3000:3000 \
				-itd sudoku_solver_fe_img:v1.0

run-prod:
	@docker run --name=sudoku_solver_react_fe \
				--network=sudoku_solver_net.local \
				--rm=true \
				-p 80:80 \
				-itd sudoku_solver_fe_img:v1.0-prod

clean:
	@docker rm -f sudoku_solver_react_fe

clean-image:
	@docker rm -f sudoku_solver_react_fe
	@docker rmi sudoku_solver_fe_img:v1.0
	@docker rmi sudoku_solver_fe_img:v1.0-prod

save:
	@docker save sudoku_solver_fe_img:v1.0-prod | gzip > sudoku_solver_fe_img.tar.gz

run-from-saved-image:
	@docker load -i sudoku_solver_fe_img.tar.gz
