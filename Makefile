.PHONY: infra-up
infra-up:
	docker compose up redis-cluster -d

.PHONY: infra-down
infra-down:
	docker compose down redis-cluster