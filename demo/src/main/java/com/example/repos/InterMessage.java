package com.example.repos;

import com.example.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterMessage extends JpaRepository<Message,Long> {
}
