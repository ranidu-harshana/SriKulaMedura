package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {
    @Query(value = "SELECT * FROM chat WHERE (sender_id=:fid AND receiver_id=:sid) OR (sender_id=:sid AND receiver_id=:fid)", nativeQuery = true)
    List<Chat> findChatsBySenderAndReceiver(@Param("fid") int fid, @Param("sid") int sid);
}
